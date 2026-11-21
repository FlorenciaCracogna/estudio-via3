export interface Integrante {
  id: string;
  nombre: string;
  /** Rol en Vía3 (Word 2026). */
  rol: string;
  /** Especialidad / síntesis profesional corta (Word 2026). */
  especialidad: string;
  foto: string;
  linkedin: string;
}

// Recorte cuadrado de 300px (la card mide 128px, 256px en pantallas 2x).
// c_thumb,g_face con zoom fijo encuadra según la cara: las 4 fotos quedan con
// la cara del mismo tamaño y a la misma altura (c_fill,g_face casi no recorta
// estas fotos, que son casi cuadradas, y las caras quedaban chicas y dispares).
const FOTO =
  "https://res.cloudinary.com/dg8rew4w9/image/upload/c_thumb,g_face,z_0.6,w_300,h_300/f_auto,q_auto";

export const equipo: Integrante[] = [
  {
    id: "julio-capra",
    nombre: "Lic. Julio Capra",
    rol: "Socio Director",
    especialidad:
      "Especialista en aprendizaje organizacional, gestión estratégica de la capacitación y desarrollo organizacional.",
    foto: `${FOTO}/v1795294884/julio_inxujy.jpg`,
    linkedin: "https://www.linkedin.com/in/juliocapra/",
  },
  {
    id: "antonella-cracogna",
    nombre: "Lic. Antonella Cracogna",
    rol: "Socia",
    especialidad:
      "Especialista en relaciones interpersonales, gestión emocional, bienestar y salud laboral.",
    foto: `${FOTO}/v1795294883/antonella_uaxn4x.jpg`,
    linkedin: "https://www.linkedin.com/in/antonella-cracogna-94b2a8105/",
  },
  {
    id: "maximiliano-contreras",
    nombre: "Lic. Maximiliano Contreras",
    rol: "Consultor asociado",
    especialidad:
      "Especialista en evaluación de perfiles por competencias y desarrollo del talento.",
    foto: `${FOTO}/v1795294916/maximiliano_yvb1d9.jpg`,
    linkedin: "https://www.linkedin.com/in/maximilianocontreras/",
  },
  {
    id: "mariana-bach",
    nombre: "Lic. Mariana Bach",
    rol: "Consultora asociada",
    especialidad:
      "Especialista en desarrollo organizacional, evaluación de perfiles y gestión del talento.",
    foto: `${FOTO}/v1795294883/mariana_ryzkdw.jpg`,
    linkedin: "https://www.linkedin.com/in/mariana-bach-b9963120/",
  },
];
