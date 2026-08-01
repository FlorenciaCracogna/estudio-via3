export interface Solucion {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
}

export const soluciones: Solucion[] = [
  {
    slug: "formacion",
    titulo: "Formación",
    descripcion:
      "Capacitamos en todas aquellas **competencias interpersonales** en el ámbito laboral, siguiendo diferentes objetivos.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593016/formacion_xo1zrd.jpg",
  },
  {
    slug: "estructura-organizacional",
    titulo: "Estructura organizacional y potencial humano",
    descripcion:
      "Brindamos un servicio de **asesoramiento, evaluación y diseño o reestructuración de los procesos**, para lograr un ambiente de trabajo organizado, con visión estratégica de futuro.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593015/estructura-organizacional_akjqzi.jpg",
  },
  {
    slug: "bienestar-organizacional",
    titulo: "Bienestar organizacional",
    descripcion:
      "Ofrecemos programas y actividades diseñadas para fomentar un **ambiente de trabajo saludable y positivo**, enfocándonos en el **desarrollo personal y colectivo de los colaboradores**.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593015/bienestar-organizacional_mue0ox.jpg",
  },
];
