import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/experiencia", "/ideas"];
  return rutas.map((ruta) => ({
    url: `${SITE_URL}${ruta}`,
    lastModified: new Date(),
    changeFrequency: ruta === "/ideas" ? "weekly" : "monthly",
    priority: ruta === "" ? 1 : 0.7,
  }));
}
