/** Adónde lleva la card de cada especialista. */
export type EnlacePartner =
  | { tipo: "linkedin"; url: string }
  | { tipo: "web"; url: string }
  /** `numero` en formato internacional, sin "+" ni espacios (como lo pide wa.me). */
  | { tipo: "whatsapp"; numero: string; mensaje?: string };

export interface Partner {
  id: string;
  nombre: string;
  enlace: EnlacePartner;
  imagen: string; // URL de Cloudinary o placeholder
  tipo: "empresa" | "persona";
}

export function hrefDeEnlace(enlace: EnlacePartner): string {
  if (enlace.tipo !== "whatsapp") return enlace.url;
  const base = `https://wa.me/${enlace.numero}`;
  return enlace.mensaje
    ? `${base}?text=${encodeURIComponent(enlace.mensaje)}`
    : base;
}

/** Texto accesible de la card según el destino del link. */
export function etiquetaDeEnlace(nombre: string, enlace: EnlacePartner): string {
  const destino = {
    linkedin: `Ver el perfil de LinkedIn de ${nombre}`,
    web: `Visitar el sitio web de ${nombre}`,
    whatsapp: `Escribirle por WhatsApp a ${nombre}`,
  }[enlace.tipo];
  return `${destino} (se abre en una pestaña nueva)`;
}

// Fotos que llegan sin recortar: Cloudinary las deja cuadradas de 400px
// (la card mide 144px, 288px en pantallas 2x) con f_auto,q_auto.
const CLOUDINARY = "https://res.cloudinary.com/dg8rew4w9/image/upload";

export const partners: Partner[] = [
  {
    id: "mariana-cusnir",
    nombre: "Lic. Mariana Cusnir",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/mariana-cusnir-89554b14/" },
    // Foto de cuerpo entero con anteojos de sol (g_face no la detecta):
    // recorte manual de cabeza y hombros sobre el original de 500x500.
    imagen: `${CLOUDINARY}/c_crop,w_190,h_190,x_175,y_0/c_scale,w_400/f_auto,q_auto/v1794055764/mariana-cusnir_j9ihfx.jpg`,
    tipo: "persona",
  },
  {
    id: "ana-julia-boucher",
    nombre: "Lic. Ana Julia Boucher",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/anajuliaboucher/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311679/Ana-Julia-Boucher_h9iamg.jpg",
    tipo: "persona",
  },
  {
    id: "jenny-davaroff",
    nombre: "Lic. Jenny Davaroff",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/jennydavaroff/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311679/Jenny-Davaroff_qqxmqa.jpg",
    tipo: "persona",
  },
  {
    id: "marcelo-velazquez",
    nombre: "Lic. Marcelo Velázquez",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/marcelo-sebasti%C3%A1n-vel%C3%A1zquez/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/marcelo-velazquez_sga11k.jpg",
    tipo: "persona",
  },
  {
    id: "natalia-cajelli",
    nombre: "Lic. Natalia Cajelli",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/natalia-cajelli-68894210/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/natalia-cajelli_h1vcw4.jpg",
    tipo: "persona",
  },
  {
    id: "diego-laham",
    nombre: "Lic. Diego Laham",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/diego-laham-6984433/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/diego-laham_sxzlje.jpg",
    tipo: "persona",
  },
  {
    id: "angeles-lloves",
    nombre: "Lic. María de los Ángeles Lloves",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/mari%C3%A1nlloves/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/maria-angeles-lloves_vvqtnf.jpg",
    tipo: "persona",
  },
  {
    id: "romina-beyne",
    nombre: "Lic. Romina Beyne",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/rominabeyne/" },
    imagen:
      "https://ui-avatars.com/api/?name=Romina+Beyne&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "silvina-arnozis",
    nombre: "Lic. Silvina Arnozis",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/silvina-arnozis-2485147" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/silvina-arnozis_e2czht.jpg",
    tipo: "persona",
  },
  {
    id: "paula-bianchi",
    nombre: "Lic. Paula Bianchi",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/paula-bianchi-2a148510" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/paula-bianchi_p6h1q2.jpg",
    tipo: "persona",
  },
  {
    id: "cecilia-fibbiani",
    nombre: "Lic. Cecilia Fibbiani",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/ceciliafibbiani" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/cecilia-fibbiani_w0imbg.jpg",
    tipo: "persona",
  },
  {
    id: "lucia-prado",
    nombre: "Lic. Lucía Prado",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/luciapradorrhh/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/lucia-prado_gerlxe.jpg",
    tipo: "persona",
  },
  {
    id: "josefina-elisii",
    nombre: "Lic. Josefina Elisii",
    enlace: { tipo: "web", url: "https://josefinaelisii.com/" },
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1789226704/josefina-elisii_cqgr4r.jpg",
    tipo: "persona",
  },
  {
    id: "manuela-mascheroni",
    nombre: "Cra. Manuela Mascheroni",
    enlace: { tipo: "linkedin", url: "https://www.linkedin.com/in/manuemascheroni/" },
    imagen:
      "https://ui-avatars.com/api/?name=Manuela+Mascheroni&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "carolina-sosa",
    nombre: "Lic. Carolina Sosa",
    enlace: {
      tipo: "whatsapp",
      numero: "5493624304212",
      mensaje: "Hola Carolina, vengo del sitio web de Vía3.",
    },
    // g_face: Cloudinary centra el recorte en la cara.
    imagen: `${CLOUDINARY}/c_fill,g_face,w_400,h_400/f_auto,q_auto/v1794055795/carolina-sosa_fppvec.jpg`,
    tipo: "persona",
  },
];
