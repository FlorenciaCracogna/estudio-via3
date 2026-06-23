export interface Partner {
  id: string;
  nombre: string;
  url: string;
  imagen: string; // URL de Cloudinary o placeholder
  tipo: "empresa" | "persona";
}

export const partners: Partner[] = [
  {
    id: "linkit-global",
    nombre: "Linkit Global",
    url: "http://linkit.global/",
    imagen: "https://linkit.global/images/logo-linkit.png",
    tipo: "empresa",
  },
  {
    id: "modo-aprendiz",
    nombre: "Modo Aprendiz",
    url: "https://www.modoaprendiz.com/",
    imagen:
      "https://ui-avatars.com/api/?name=Modo+Aprendiz&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "empresa",
    // TODO: reemplazar con logo real en Cloudinary
  },
  {
    id: "coaching-oratoria",
    nombre: "Coaching y Oratoria",
    url: "http://oratoriaenaccion.davaroff.com.ar/",
    imagen:
      "https://ui-avatars.com/api/?name=Jenny+Davaroff&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "empresa",
    // TODO: reemplazar con logo real en Cloudinary
  },
  {
    id: "integrarnos",
    nombre: "Integrarnos",
    url: "https://www.integrarnos.com.ar/",
    imagen:
      "https://ui-avatars.com/api/?name=Integrarnos&background=99042F&color=fff&size=200&font-size=0.33",
    tipo: "empresa",
    // TODO: reemplazar con logo real en Cloudinary
  },
  {
    id: "natalia-cajelli",
    nombre: "Lic. Natalia Cajelli",
    url: "https://www.linkedin.com/in/natalia-cajelli-68894210/",
    imagen:
      "https://ui-avatars.com/api/?name=Natalia+Cajelli&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "diego-laham",
    nombre: "Lic. Diego Laham",
    url: "https://www.linkedin.com/in/diego-laham-6984433/",
    imagen:
      "https://ui-avatars.com/api/?name=Diego+Laham&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "angeles-lloves",
    nombre: "Lic. María de los Ángeles Lloves",
    url: "https://www.linkedin.com/in/marianlloves/",
    imagen:
      "https://ui-avatars.com/api/?name=Angeles+Lloves&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "romina-beyne",
    nombre: "Lic. Romina Beyne",
    url: "https://www.linkedin.com/in/rominabeyne/",
    imagen:
      "https://ui-avatars.com/api/?name=Romina+Beyne&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "silvina-arnozis",
    nombre: "Lic. Silvina Arnozis",
    url: "https://www.linkedin.com/in/silvina-arnozis-2485147",
    imagen:
      "https://ui-avatars.com/api/?name=Silvina+Arnozis&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "paula-bianchi",
    nombre: "Lic. Paula Bianchi",
    url: "https://www.linkedin.com/in/paula-bianchi-2a148510",
    imagen:
      "https://ui-avatars.com/api/?name=Paula+Bianchi&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "cecilia-fibbiani",
    nombre: "Lic. Cecilia Fibbiani",
    url: "https://www.linkedin.com/in/ceciliafibbiani",
    imagen:
      "https://ui-avatars.com/api/?name=Cecilia+Fibbiani&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
  {
    id: "lucia-prado",
    nombre: "Lic. Lucía Prado",
    url: "https://www.linkedin.com/in/luciapradorrhh/",
    imagen:
      "https://ui-avatars.com/api/?name=Lucia+Prado&background=DBCAB9&color=99042F&size=200&font-size=0.33",
    tipo: "persona",
  },
];
