"use client";

import type { ImageLoaderProps } from "next/image";

/**
 * Loader global de next/image (images.loaderFile en next.config.ts).
 *
 * Cada imagen se pide directo a su origen, que hace el resize y la conversión
 * de formato. Así no pasan por el optimizador de la plataforma (Image CDN de
 * Netlify u optimizador de Vercel) y no consumen su ancho de banda ni su cuota.
 * No depende de ninguna plataforma: funciona igual en Netlify, Vercel o local.
 *
 * - res.cloudinary.com: agrega f_auto, q_auto y c_limit,w_<ancho> AL FINAL de
 *   las transformaciones que ya trae la URL (c_crop, c_thumb, g_face, e_trim…).
 *   Si fuera al principio, un c_crop con coordenadas se aplicaría sobre la
 *   imagen ya achicada y cambiaría el encuadre. c_limit nunca agranda.
 *   También convierte las HEIC, que el optimizador de Next no sabe decodificar.
 * - cdn.sanity.io: parámetros de imagen de Sanity (w, q, auto=format). Si la
 *   URL ya trae w y h (urlFor().width().height()), escala h en proporción para
 *   no cambiar el recorte, y no pide más ancho que el original.
 * - ui-avatars.com: la URL tal cual (es un PNG chico generado con size=).
 * - Archivos locales de /public: tal cual. Se agrega ?w= solo para que cada
 *   ancho del srcset tenga su URL (el servidor ignora el parámetro).
 */

const CLOUDINARY_HOST = "res.cloudinary.com";
const SANITY_HOST = "cdn.sanity.io";
const UI_AVATARS_HOST = "ui-avatars.com";

// Claves de los parámetros de transformación de Cloudinary (w_, c_, e_…)
const CLOUDINARY_PARAM = new Set(
  "a ac af ar b bo br c co cs d dl dn dpr du e eo f fl fn fps g h ki l o p pg q r so sp t u vc vs w x y z".split(" ")
);

function esTransformacion(segmento: string) {
  return segmento.split(",").every((parte) => {
    const m = /^([a-z]{1,3})_./.exec(parte);
    return m !== null && CLOUDINARY_PARAM.has(m[1]);
  });
}

function cloudinaryLoader(url: URL, width: number, quality?: number) {
  const marcador = "/upload/";
  const i = url.pathname.indexOf(marcador);
  if (i === -1) return null;

  const antes = url.pathname.slice(0, i + marcador.length);
  const segmentos = url.pathname.slice(i + marcador.length).split("/");

  // Las transformaciones van antes de la versión (v123…) y del public id
  let fin = 0;
  while (fin < segmentos.length - 1 && !/^v\d+$/.test(segmentos[fin]) && esTransformacion(segmentos[fin])) {
    fin++;
  }

  const resize = `f_auto,${quality ? `q_${quality}` : "q_auto"},c_limit,w_${width}`;
  segmentos.splice(fin, 0, resize);
  url.pathname = antes + segmentos.join("/");
  return url.toString();
}

function sanityLoader(url: URL, width: number, quality?: number) {
  const params = url.searchParams;
  const anchoOriginal = Number(params.get("w")) || undefined;
  const ancho = anchoOriginal ? Math.min(width, anchoOriginal) : width;

  const alto = Number(params.get("h"));
  if (anchoOriginal && alto) {
    params.set("h", String(Math.round((alto * ancho) / anchoOriginal)));
  }
  params.set("w", String(ancho));
  params.set("q", String(quality || 75));
  if (!params.has("fm")) params.set("auto", "format");
  // URLSearchParams codifica las comas de rect=; se dejan como las arma urlFor
  return url.toString().replace(/%2C/g, ",");
}

export default function imageLoader({ src, width, quality }: ImageLoaderProps) {
  // Archivo local de /public
  if (src.startsWith("/")) {
    return `${src}${src.includes("?") ? "&" : "?"}w=${width}`;
  }

  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return src;
  }

  if (url.hostname === CLOUDINARY_HOST) {
    const resultado = cloudinaryLoader(url, width, quality);
    if (resultado) return resultado;
  } else if (url.hostname === SANITY_HOST) {
    return sanityLoader(url, width, quality);
  } else if (url.hostname === UI_AVATARS_HOST) {
    return src;
  }

  if (process.env.NODE_ENV !== "production") {
    console.warn(`[image-loader] Origen de imagen sin loader propio, se usa tal cual: ${src}`);
  }
  return src;
}
