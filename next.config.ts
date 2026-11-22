/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cada imagen se pide a su origen (Cloudinary, Sanity…), que hace el resize:
    // no pasan por el optimizador de la plataforma (Image CDN de Netlify).
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // Con el loader propio no se usan; quedan por si se vuelve al de Next.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Rutas renombradas en los contenidos 2026. 301 para que Google traspase el
  // posicionamiento. /equipo y /nosotros se redirigen en src/proxy.ts: acá
  // Next les arrastraría el ?miembro= (quedaría /?miembro=1#equipo).
  async redirects() {
    return [
      { source: "/clientes", destination: "/experiencia", statusCode: 301 },
      { source: "/novedades", destination: "/ideas", statusCode: 301 },
    ];
  },
};

export default nextConfig;
