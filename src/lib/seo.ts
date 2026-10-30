import type { Metadata } from "next";

export const SITE_URL = "https://estudiovia3.com.ar";
export const SITE_NAME = "Estudio Vía3";
export const SITE_DESCRIPTION =
  "Aprendizaje organizacional: ayudamos a las organizaciones a transformar conocimientos en resultados del negocio. Soluciones de aprendizaje, estructura organizacional, capital humano y bienestar.";

// Foto del Hero recortada a 1200x630 por Cloudinary para compartir en redes
const OG_IMAGE =
  "https://res.cloudinary.com/dg8rew4w9/image/upload/c_fill,w_1200,h_630,f_jpg,q_auto/v1781807517/hero-bg_bc4nqs.jpg";

/** Open Graph + Twitter de una página, con la imagen del sitio. */
export function socialMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Pick<Metadata, "openGraph" | "twitter" | "alternates"> {
  return {
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_AR",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [
        { url: OG_IMAGE, width: 1200, height: 630, alt: "Equipo Estudio Vía3" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

// Datos estructurados para Google. Mantener sincronizado con las sedes del Footer.
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Estudio Vía3 S. R. L.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-color.svg`,
  description: SITE_DESCRIPTION,
  sameAs: [
    "https://www.linkedin.com/company/estudio-via3",
    "https://www.instagram.com/estudio.via3",
  ],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Avda. Del Libertador 5582, 14 D",
      addressLocality: "Ciudad Autónoma de Buenos Aires",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Santiago del Estero 636",
      addressLocality: "Resistencia",
      addressRegion: "Chaco",
      addressCountry: "AR",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+54 11 5180-6029",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: "es",
    },
    {
      "@type": "ContactPoint",
      telephone: "+54 362 438-8507",
      contactType: "customer service",
      areaServed: "AR",
      availableLanguage: "es",
    },
  ],
};
