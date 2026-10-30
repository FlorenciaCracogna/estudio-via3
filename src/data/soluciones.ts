export interface SeccionSolucion {
  subtitulo: string;
  items: string[];
}

export interface Solucion {
  slug: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  /** object-position de la foto en la franja baja del modal (default: center). */
  focoModal?: string;
  modalTitulo: string;
  intro: string;
  secciones: SeccionSolucion[];
}

export const soluciones: Solucion[] = [
  {
    slug: "formacion",
    titulo: "Aprendizaje organizacional",
    descripcion:
      "Diseñamos estrategias, cursos y experiencias de aprendizaje orientados a fortalecer capacidades y prácticas que las personas y los equipos necesitan para alcanzar mejores resultados.",
    imagen:
      "https://res.cloudinary.com/dg8rew4w9/image/upload/v1785593016/formacion_xo1zrd.jpg",
    modalTitulo: "Soluciones para el aprendizaje organizacional",
    intro:
      "Dispositivos especialmente diseñados para contribuir con la formación laboral; focalizados en aquellas competencias que, en el ámbito organizacional, implican el marco de relaciones de una persona con sus niveles de reporte, sus pares, su entorno y su efectividad.",
    secciones: [
      {
        subtitulo: "Aprendizaje para el desarrollo de líderes",
        items: [
          "Desarrollo de competencias de conducción y liderazgo.",
          "Fortalecimiento de habilidades de coaching y acompañamiento de equipos.",
          "Gestión de conversaciones de desarrollo y retroalimentación.",
          "Liderazgo de procesos de cambio y transformación.",
        ],
      },
      {
        subtitulo: "Aprendizaje para las relaciones de trabajo",
        items: [
          "Desarrollo de habilidades para la comunicación y el trabajo en equipo.",
          "Gestión de las emociones.",
          "Gestión de conversaciones complejas en contextos laborales.",
          "Desarrollo de prácticas de colaboración y coordinación entre áreas.",
        ],
      },
      {
        subtitulo: "Aprendizaje para la efectividad organizacional",
        items: [
          "Administración de procesos de gestión del cambio cultural.",
          "Implementación de metodologías ágiles para la gestión de proyectos.",
          "Mejora de la calidad en la cadena de servicio interno.",
        ],
      },
      {
        subtitulo: "Aprendizaje para la relación con clientes",
        items: [
          "Desarrollo de estándares de calidad de servicio y calidad de contacto.",
          "Fortalecimiento de la actitud comercial y la orientación al cliente.",
        ],
      },
      {
        subtitulo: "Aprendizaje para el desarrollo profesional",
        items: [
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
    // En la franja del modal (~5:1) el centro deja sólo torsos: se sube el foco a las caras y la red de hilos
    focoModal: "50% 30%",
    modalTitulo:
      "Soluciones para la estructura organizacional y el capital humano",
    intro:
      "Conjunto de condiciones, procesos y herramientas, intencionalmente estructurados para anclar los aprendizajes esperables.",
    secciones: [
      {
        subtitulo: "Gestión del aprendizaje",
        items: [
          "Detección de necesidades de aprendizaje en áreas, equipos y niveles organizacionales.",
          "Diseño de planes de capacitación estratégicos y de desarrollo continuo.",
          "Construcción de trayectos y programas adaptados a cada organización.",
          "Diseño de materiales educativos y kits de capacitación para entrenamientos técnicos.",
        ],
      },
      {
        subtitulo: "Gestión del conocimiento",
        items: [
          "Construcción de mapas de saberes y conocimiento crítico.",
          "Diseño de comunidades de práctica y aprendizaje.",
          "Formación de facilitadores internos para multiplicar conocimientos y experiencias.",
          "Implementación de mecanismos de evaluación de la capacitación.",
        ],
      },
      {
        subtitulo: "Gestión del talento",
        items: [
          "Construcción de modelos de competencias y skill master.",
          "Diseño de perfiles y competencias para roles laborales.",
          "Desarrollo de procesos de selección de personal y evaluaciones psicotécnicas.",
          "Diseño de estrategias de desarrollo y crecimiento profesional.",
        ],
      },
      {
        subtitulo: "Gestión del desempeño",
        items: [
          "Diseño e implementación de procesos de evaluación de desempeño.",
          "Evaluación de potencial para promociones, sucesiones o rediseño de funciones.",
          "Mediciones de clima laboral e identificación de oportunidades de mejora.",
        ],
      },
      {
        subtitulo: "Diseño organizacional",
        items: [
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
    modalTitulo: "Soluciones para el bienestar organizacional",
    intro:
      "Programas y actividades diseñados para fomentar un ambiente de trabajo saludable y positivo, enfocándose en el desarrollo personal y colectivo, la calidad de vida laboral y la optimización del ambiente de productividad.",
    secciones: [
      {
        subtitulo: "Clima y salud laboral",
        items: [
          "Diseño de programas de salud física y mental en el ámbito laboral.",
          "Promoción de hábitos saludables, nutrición, actividad física y manejo del estrés.",
          "Implementación de estrategias y políticas orientadas a fortalecer el bienestar organizacional.",
        ],
      },
      {
        subtitulo: "Integración y desarrollo de equipos",
        items: [
          "Diseño e implementación de actividades de team building.",
          "Favorecimiento de la integración intra e interequipos.",
          "Desarrollo de iniciativas para la gestión de la diversidad y la inclusión.",
        ],
      },
      {
        subtitulo: "Coaching para el desarrollo",
        items: [
          "Implementación de procesos de coaching individual.",
          "Facilitación de procesos de coaching grupal orientados a metas y desafíos compartidos.",
        ],
      },
    ],
  },
];
