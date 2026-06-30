import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  title: "Estudio Vía3",
  description: "Aprendizaje Organizacional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} ${roboto.variable} h-full`}>
      <body className="min-h-full flex flex-col font-roboto antialiased">
        <Navbar />
        {children}
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
