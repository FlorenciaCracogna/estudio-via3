// Soluciones del home (Word 2026): las 3 categorías, su párrafo introductorio,
// las subsoluciones con sus bullets y la foto de cada card.

export interface Subsolucion {
  titulo: string;
  bullets: string[];
}

export interface Solucion {
  slug: string;
  /** Nombre corto (va después de la etiqueta "Soluciones para"): título de
   *  la card y del modal, y valor del select del formulario. */
  titulo: string;
  /** Párrafo introductorio: se ve en la card y en el modal. */
  descripcion: string;
  imagen: string;
  subsoluciones: Subsolucion[];
}

export const soluciones: Solucion[] = [
  {
    slug: "aprendizaje-organizacional",
    titulo: "Aprendizaje organizacional",
    descripcion:
      "Diseñamos estrategias, cursos y experiencias de aprendizaje orientados a fortalecer capacidades y prácticas que las personas y los equipos necesitan para alcanzar mejores resultados.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593016/formacion_xo1zrd.jpg",
    subsoluciones: [
      {
        titulo: "Aprendizaje para el desarrollo de líderes",
        bullets: [
          "Desarrollo de competencias de conducción y liderazgo.",
          "Fortalecimiento de habilidades de coaching y acompañamiento de equipos.",
          "Gestión de conversaciones de desarrollo y retroalimentación.",
          "Liderazgo de procesos de cambio y transformación.",
        ],
      },
      {
        titulo: "Aprendizaje para las relaciones de trabajo",
        bullets: [
          "Desarrollo de habilidades para la comunicación y el trabajo en equipo.",
          "Gestión de las emociones.",
          "Gestión de conversaciones complejas en contextos laborales.",
          "Desarrollo de prácticas de colaboración y coordinación entre áreas.",
        ],
      },
      {
        titulo: "Aprendizaje para la efectividad organizacional",
        bullets: [
          "Administración de procesos de gestión del cambio cultural.",
          "Implementación de metodologías ágiles para la gestión de proyectos.",
          "Mejora de la calidad en la cadena de servicio interno.",
        ],
      },
      {
        titulo: "Aprendizaje para la relación con clientes",
        bullets: [
          "Desarrollo de estándares de calidad de servicio y calidad de contacto.",
          "Fortalecimiento de la actitud comercial y la orientación al cliente.",
        ],
      },
      {
        titulo: "Aprendizaje para el desarrollo profesional",
        bullets: [
          "Optimización de prácticas de planeamiento y control de gestión de la propia tarea.",
          "Desarrollo de habilidades para la orientación a resultados y la productividad.",
          "Fortalecimiento de procesos de análisis y toma de decisiones.",
          "Desarrollo de competencias de storytelling y presentaciones orales efectivas.",
          "Mejora de la coordinación y conducción de reuniones de trabajo.",
        ],
      },
    ],
  },
  {
    slug: "estructura-organizacional",
    titulo: "Estructura organizacional y capital humano",
    // Word: "para el que aprendizaje" → corregido a "para que el aprendizaje"
    descripcion:
      "Desarrollamos procesos, herramientas y prácticas que generan las condiciones para que el aprendizaje se sostenga en el tiempo, se transfiera a los puestos de trabajo y se consolide como parte del crecimiento organizacional.",
    // Foto muy panorámica (4000x1848): c_crop saca las sillas apiladas de la
    // derecha y la pared de arriba, y deja la ronda de personas centrada.
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/c_crop,x_440,y_160,w_2560,h_1600/v1793386552/estructura-organizacional_cfrxnl.jpg",
    subsoluciones: [
      {
        titulo: "Gestión del aprendizaje",
        bullets: [
          "Detección de necesidades de aprendizaje en áreas, equipos y niveles organizacionales.",
          "Diseño de planes de capacitación estratégicos y de desarrollo continuo.",
          "Construcción de trayectos y programas adaptados a cada organización.",
          "Diseño de materiales educativos y kits de capacitación para entrenamientos técnicos.",
        ],
      },
      {
        titulo: "Gestión del conocimiento",
        bullets: [
          "Construcción de mapas de saberes y conocimiento crítico.",
          "Diseño de comunidades de práctica y aprendizaje.",
          "Formación de facilitadores internos para multiplicar conocimientos y experiencias.",
          "Implementación de mecanismos de evaluación de la capacitación.",
        ],
      },
      {
        titulo: "Gestión del talento",
        bullets: [
          "Construcción de modelos de competencias y skill master.",
          "Diseño de perfiles y competencias para roles laborales.",
          "Desarrollo de procesos de selección de personal y evaluaciones psicotécnicas.",
          "Diseño de estrategias de desarrollo y crecimiento profesional.",
        ],
      },
      {
        titulo: "Gestión del desempeño",
        bullets: [
          "Diseño e implementación de procesos de evaluación de desempeño.",
          "Evaluación de potencial para promociones, sucesiones o rediseño de funciones.",
          "Mediciones de clima laboral e identificación de oportunidades de mejora.",
        ],
      },
      {
        titulo: "Diseño organizacional",
        bullets: [
          "Diseño de estructuras organizativas y organigramas.",
          "Elaboración de descripciones de puestos y manuales de funciones.",
          "Definición de mecanismos para alinear roles y responsabilidades con la estrategia de la organización.",
        ],
      },
    ],
  },
  {
    slug: "bienestar-organizacional",
    titulo: "Bienestar organizacional",
    descripcion:
      "Diseñamos programas e intervenciones orientados a construir entornos de trabajo saludables que favorezcan el bienestar individual y colectivo, las experiencias laborales positivas, el compromiso y el desarrollo.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593015/bienestar-organizacional_mue0ox.jpg",
    subsoluciones: [
      {
        titulo: "Clima y salud laboral",
        bullets: [
          "Diseño de programas de salud física y mental en el ámbito laboral.",
          "Promoción de hábitos saludables, nutrición, actividad física y manejo del estrés.",
          "Implementación de estrategias y políticas orientadas a fortalecer el bienestar organizacional.",
        ],
      },
      {
        titulo: "Integración y desarrollo de equipos",
        bullets: [
          "Diseño e implementación de actividades de team building.",
          "Favorecimiento de la integración intra e interequipos.",
          "Desarrollo de iniciativas para la gestión de la diversidad y la inclusión.",
        ],
      },
      {
        titulo: "Coaching para el desarrollo",
        bullets: [
          "Implementación de procesos de coaching individual.",
          "Facilitación de procesos de coaching grupal orientados a metas y desafíos compartidos.",
        ],
      },
    ],
  },
];
