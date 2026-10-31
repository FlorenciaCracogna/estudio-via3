// Estructura del home: secciones del menú, sus anclas y la "pregunta inicial"
// de cada una. Lo usan la navbar, el footer, el Hero y los títulos de sección.

export interface Seccion {
  id: string;
  label: string;
  pregunta: string;
}

export const secciones = {
  via3: {
    id: "via3",
    label: "Vía3",
    pregunta: "¿Quiénes somos y qué nos diferencia?",
  },
  desafios: {
    id: "desafios",
    label: "Desafíos",
    pregunta: "¿Qué desafíos ayudamos a resolver?",
  },
  soluciones: {
    id: "soluciones",
    label: "Soluciones",
    pregunta: "¿Cómo acompañamos esos desafíos?",
  },
  experiencia: {
    id: "experiencia",
    label: "Experiencia",
    pregunta: "¿Con quién hemos trabajado?",
  },
  ideas: {
    id: "ideas",
    label: "Ideas",
    pregunta:
      "¿Qué pensamos sobre aprendizaje organizacional y desarrollo de capacidades?",
  },
  contacto: {
    id: "contacto",
    label: "Contacto",
    pregunta: "¿Conversamos sobre los desafíos de tu organización?",
  },
} satisfies Record<string, Seccion>;

/** Orden del menú y de las preguntas del Hero. */
export const seccionesMenu: Seccion[] = [
  secciones.via3,
  secciones.desafios,
  secciones.soluciones,
  secciones.experiencia,
  secciones.ideas,
  secciones.contacto,
];

/** Sub-secciones de Vía3 (desplegable de la navbar). */
export const subseccionesVia3 = [
  { id: "que-proponemos", label: "Qué proponemos" },
  { id: "como-trabajamos", label: "Cómo trabajamos" },
  { id: "equipo", label: "Equipo" },
  { id: "red-de-especialistas", label: "Red de especialistas" },
];
