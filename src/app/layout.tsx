import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppFlotante from "@/components/WhatsAppFlotante";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  organizationJsonLd,
  socialMetadata,
} from "@/lib/seo";
import { SanityLive } from "@/sanity/lib/live";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Aprendizaje Organizacional`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  ...socialMetadata({
    title: `${SITE_NAME} | Aprendizaje Organizacional`,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${roboto.variable} h-full`}>
      <body className="min-h-full flex flex-col font-roboto antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFlotante />
        <ScrollReveal />
        <SanityLive />
      </body>
    </html>
  );
}
