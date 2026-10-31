// Desafíos del home (Word 2026). Para cambiar una foto alcanza con reemplazar
// el link de Cloudinary: el formato (f_auto), la calidad (q_auto) y el ancho
// los agrega DesafioCard al pedirla, así que sirve cualquier formato de origen
// (incluso HEIC, que Chrome no muestra directo).

export interface Desafio {
  titulo: string;
  texto: string;
  foto: string;
}

export const desafios: Desafio[] = [
  {
    titulo: "Lograr que el aprendizaje genere resultados concretos",
    texto:
      "Las organizaciones invierten tiempo, recursos y esfuerzo en capacitar a sus personas. El desafío consiste en lograr que esos aprendizajes se transfieran al trabajo cotidiano y produzcan mejoras reales en el desempeño.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385850/resultados-concretos_o3dkpr.jpg",
  },
  {
    titulo: "Desarrollar líderes capaces de acompañar la transformación",
    texto:
      "Los cambios organizacionales exigen líderes que puedan orientar, desarrollar y movilizar a sus equipos frente a nuevos escenarios y demandas crecientes.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385796/lideres-acompa%C3%B1ando-transformacion_cgfbmf.jpg",
  },
  {
    titulo: "Fortalecer la colaboración y el trabajo entre áreas",
    texto:
      "La coordinación entre personas, equipos y sectores resulta crítica para alcanzar resultados sostenibles y brindar una mejor experiencia a clientes internos y externos.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385796/colaboracion-trabajo-areas_nuu8ol.heic",
  },
  {
    titulo: "Acompañar procesos de cambio y evolución organizacional",
    texto:
      "Nuevas estrategias, procesos, tecnologías o modelos de negocio requieren desarrollar capacidades de adaptación que permitan sostener los cambios en el tiempo.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385804/procesos-cambio-evolucion-organizacional_x77zwk.jpg",
  },
  {
    titulo: "Profesionalizar la gestión de las personas y el talento",
    texto:
      "A medida que las organizaciones crecen, necesitan estructuras, procesos y herramientas que permitan desarrollar, evaluar y potenciar a sus colaboradores.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385797/gestion-personas-talento_lx0zkn.jpg",
  },
  {
    titulo: "Construir entornos de trabajo saludables y sostenibles",
    texto:
      "El bienestar de las personas constituye una condición fundamental para favorecer el compromiso, el aprendizaje continuo y la sostenibilidad organizacional.",
    foto: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793385796/entornos-saludables-contenidos_qsdwqr.jpg",
  },
];
