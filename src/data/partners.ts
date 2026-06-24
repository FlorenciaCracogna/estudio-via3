export interface Partner {
  id: string;
  nombre: string;
  url: string;
  imagen: string; // URL de Cloudinary o placeholder
  tipo: "empresa" | "persona";
}

export const partners: Partner[] = [
  {
    id: "mariana-cusnir",
    nombre: "Lic. Mariana Cusnir",
    url: "https://www.linkedin.com/in/mariana-cusnir-89554b14/",
    imagen:
      "https://ui-avatars.com/api/?name=Mariana+Cusnir&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "ana-julia-boucher",
    nombre: "Lic. Ana Julia Boucher",
    url: "https://www.linkedin.com/in/anajuliaboucher/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311679/Ana-Julia-Boucher_h9iamg.jpg",
    tipo: "persona",
  },
  {
    id: "jenny-davaroff",
    nombre: "Lic. Jenny Davaroff",
    url: "https://www.linkedin.com/in/jennydavaroff/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311679/Jenny-Davaroff_qqxmqa.jpg",
    tipo: "persona",
  },
  {
    id: "marcelo-velazquez",
    nombre: "Lic. Marcelo Velázquez",
    url: "https://www.linkedin.com/in/marcelo-sebasti%C3%A1n-vel%C3%A1zquez/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/marcelo-velazquez_sga11k.jpg",
    tipo: "persona",
  },
  {
    id: "natalia-cajelli",
    nombre: "Lic. Natalia Cajelli",
    url: "https://www.linkedin.com/in/natalia-cajelli-68894210/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/natalia-cajelli_h1vcw4.jpg",
    tipo: "persona",
  },
  {
    id: "diego-laham",
    nombre: "Lic. Diego Laham",
    url: "https://www.linkedin.com/in/diego-laham-6984433/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/diego-laham_sxzlje.jpg",
    tipo: "persona",
  },
  {
    id: "angeles-lloves",
    nombre: "Lic. María de los Ángeles Lloves",
    url: "https://www.linkedin.com/in/mari%C3%A1nlloves/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311677/maria-angeles-lloves_vvqtnf.jpg",
    tipo: "persona",
  },
  {
    id: "romina-beyne",
    nombre: "Lic. Romina Beyne",
    url: "https://www.linkedin.com/in/rominabeyne/",
    imagen:
      "https://ui-avatars.com/api/?name=Romina+Beyne&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "silvina-arnozis",
    nombre: "Lic. Silvina Arnozis",
    url: "https://www.linkedin.com/in/silvina-arnozis-2485147",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/silvina-arnozis_e2czht.jpg",
    tipo: "persona",
  },
  {
    id: "paula-bianchi",
    nombre: "Lic. Paula Bianchi",
    url: "https://www.linkedin.com/in/paula-bianchi-2a148510",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/paula-bianchi_p6h1q2.jpg",
    tipo: "persona",
  },
  {
    id: "cecilia-fibbiani",
    nombre: "Lic. Cecilia Fibbiani",
    url: "https://www.linkedin.com/in/ceciliafibbiani",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/cecilia-fibbiani_w0imbg.jpg",
    tipo: "persona",
  },
  {
    id: "lucia-prado",
    nombre: "Lic. Lucía Prado",
    url: "https://www.linkedin.com/in/luciapradorrhh/",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782311676/lucia-prado_gerlxe.jpg",
    tipo: "persona",
  },
];
