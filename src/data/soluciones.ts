export interface SeccionSolucion {
  subtitulo: string;
  items: string[];
}

export interface Solucion {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  modalTitulo: string;
  intro: string;
  secciones: SeccionSolucion[];
}

export const soluciones: Solucion[] = [
  {
    slug: "formacion",
    titulo: "Formación",
    descripcion:
      "Capacitamos en todas aquellas **competencias interpersonales** en el ámbito laboral, siguiendo diferentes objetivos.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593016/formacion_xo1zrd.jpg",
    modalTitulo: "Soluciones para el aprendizaje organizacional",
    intro:
      "Dispositivos especialmente diseñados para contribuir con la formación laboral; focalizados en aquellas competencias que, en el ámbito organizacional, implican el marco de relaciones de una persona con sus niveles de reporte, sus pares, su entorno y su efectividad.",
    secciones: [
      {
        subtitulo: "Relaciones con las personas a cargo",
        items: [
          "Conducción y liderazgo de equipos de trabajo.",
          "Habilidades para la comunicación y el trabajo en equipo.",
          "Gestión de las emociones y conversaciones complejas.",
        ],
      },
      {
        subtitulo: "Relaciones con la Organización",
        items: [
          "Gestión del cambio cultural.",
          "Gestión de proyectos a través de metodologías ágiles.",
          "Comunidades de práctica y de aprendizaje.",
          "Calidad en la cadena de servicio interno.",
        ],
      },
      {
        subtitulo: "Relaciones con los clientes de la Organización",
        items: [
          "Calidad de servicio y calidad de contacto: enfoque people experience.",
          "Desarrollo de la actitud comercial.",
        ],
      },
      {
        subtitulo: "Relaciones con su desarrollo profesional",
        items: [
          "Planeamiento y control de gestión de la propia tarea.",
          "Orientación a resultados y productividad.",
          "Procesos de toma de decisiones.",
          "Storytelling (Presentaciones orales efectivas).",
          "Coordinación de reuniones de trabajo.",
        ],
      },
    ],
  },
  {
    slug: "estructura-organizacional",
    titulo: "Estructura organizacional y potencial humano",
    descripcion:
      "Brindamos un servicio de **asesoramiento, evaluación y diseño o reestructuración de los procesos**, para lograr un ambiente de trabajo organizado, con visión estratégica de futuro.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1781807517/hero-bg_bc4nqs.jpg",
    modalTitulo:
      "Soluciones para la estructura organizacional y el capital humano",
    intro:
      "Conjunto de condiciones, procesos y herramientas, intencionalmente estructurados para anclar los aprendizajes esperables.",
    secciones: [
      {
        subtitulo: "Gestión del aprendizaje",
        items: [
          "Detección de aprendizajes requeridos; áreas o niveles organizacionales.",
          "Planeamiento de capacitación organizacional: estratégicos, de desarrollo y de aprendizaje continuo.",
          "Diseño de materiales educativos (kits de capacitación) para entrenamientos técnicos.",
          "Formación de facilitadores internos para el aprendizaje.",
        ],
      },
      {
        subtitulo: "Gestión del talento",
        items: [
          "Diseño organizacional: definición de organigramas, descripciones de puestos y generación de manual de funciones.",
          "Construcción de modelos de competencias (skill master).",
          "Construcción de perfiles laborales y mapa de saberes del rol.",
          "Proceso de selección de personal y evaluaciones psicotécnicas.",
        ],
      },
      {
        subtitulo: "Gestión del desempeño",
        items: [
          "Evaluaciones de desempeño y de potencial para la promoción o reestructuración de puestos.",
          "Evaluaciones de clima laboral para medir el ambiente de trabajo y definir acciones de mejora.",
        ],
      },
    ],
  },
  {
    slug: "bienestar-organizacional",
    titulo: "Bienestar organizacional",
    descripcion:
      "Ofrecemos programas y actividades diseñadas para fomentar un **ambiente de trabajo saludable y positivo**, enfocándonos en el **desarrollo personal y colectivo de los colaboradores**.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593015/bienestar-organizacional_mue0ox.jpg",
    modalTitulo: "Soluciones para el bienestar organizacional",
    intro:
      "Programas y actividades diseñados para fomentar un ambiente de trabajo saludable y positivo, enfocándose en el desarrollo personal y colectivo, la calidad de vida laboral y la optimización del ambiente de productividad.",
    secciones: [
      {
        subtitulo: "Clima y salud laboral",
        items: [
          "Dispositivos de hábitos saludables en el ámbito laboral: salud física y mental, nutrición, actividades deportivas y manejo del estrés.",
          "Estrategias y políticas de promoción del bienestar: ambiente laboral positivo, flexibilidad, reconocimiento y apoyo emocional.",
        ],
      },
      {
        subtitulo: "Integración",
        items: [
          "Coaching individual y grupal para alcanzar metas y fomentar el aprendizaje compartido.",
          "Diseño e implementación de metodologías de Team building para el fortalecimiento de la colaboración intra y/o inter equipos.",
          "Gestión de la diversidad y la inclusión.",
        ],
      },
    ],
  },
];
