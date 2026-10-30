/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
  // Rutas renombradas en los contenidos 2026. 301 para que Google traspase
  // el posicionamiento; los query params (?miembro=) se conservan solos.
  async redirects() {
    return [
      { source: "/clientes", destination: "/experiencia", statusCode: 301 },
      { source: "/novedades", destination: "/ideas", statusCode: 301 },
      { source: "/nosotros", destination: "/equipo", statusCode: 301 },
    ];
  },
};

export default nextConfig;
