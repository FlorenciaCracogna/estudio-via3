import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = ["", "/nosotros", "/clientes", "/novedades"];
  return rutas.map((ruta) => ({
    url: `${SITE_URL}${ruta}`,
    lastModified: new Date(),
    changeFrequency: ruta === "/novedades" ? "weekly" : "monthly",
    priority: ruta === "" ? 1 : 0.7,
  }));
}
