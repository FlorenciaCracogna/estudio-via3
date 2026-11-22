import type { Metadata } from "next";

export const SITE_URL = "https://estudiovia3.com.ar";
export const SITE_NAME = "Estudio Vía3";
export const SITE_DESCRIPTION =
  "Aprendizaje organizacional: ayudamos a las organizaciones a transformar conocimientos en resultados del negocio. Soluciones de aprendizaje, estructura organizacional, capital humano y bienestar.";

// Vista previa al compartir (WhatsApp, LinkedIn, X…): 1200x630, estática en
// /public. Foto del Hero con velo bordó, logo y "Aprendizaje organizacional",
// centrados para que también se lean en la miniatura cuadrada de WhatsApp.
// Es relativa: se resuelve contra metadataBase (SITE_URL).
const OG_IMAGE = "/og-image.jpg";
const OG_IMAGE_ALT = "Vía3: aprendizaje organizacional";

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
        { url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT, type: "image/jpeg" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
    },
  };
}

// Datos estructurados para Google. Mantener sincronizado con src/data/sedes.ts.
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
