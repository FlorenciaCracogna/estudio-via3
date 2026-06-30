import { defineQuery } from "next-sanity";

export const ULTIMAS_NOVEDADES_QUERY = defineQuery(`
  *[_type == "novedad"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    excerpt,
    image,
    link,
    buttonText,
    publishedAt
  }
`);

export const TODAS_NOVEDADES_QUERY = defineQuery(`
  *[_type == "novedad"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    image,
    link,
    buttonText,
    publishedAt
  }
`);
