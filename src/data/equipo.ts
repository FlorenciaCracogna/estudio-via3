export interface Integrante {
  id: string;
  nombre: string;
  /** Rol en Vía3 (Word 2026). */
  rol: string;
  /** Especialidad / síntesis profesional corta (Word 2026). */
  especialidad: string;
  foto: string; // reemplazar con URL de Cloudinary cuando estén las fotos
  linkedin: string;
}

export const equipo: Integrante[] = [
  {
    id: "julio-capra",
    nombre: "Lic. Julio Capra",
    rol: "Socio Director",
    especialidad:
      "Especialista en aprendizaje organizacional, gestión estratégica de la capacitación y desarrollo organizacional.",
    foto: "https://ui-avatars.com/api/?name=Julio+Capra&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/juliocapra/",
  },
  {
    id: "antonella-cracogna",
    nombre: "Lic. Antonella Cracogna",
    rol: "Socia",
    especialidad:
      "Especialista en relaciones interpersonales, gestión emocional, bienestar y salud laboral.",
    foto: "https://ui-avatars.com/api/?name=Antonella+Cracogna&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/antonella-cracogna-94b2a8105/",
  },
  {
    id: "maximiliano-contreras",
    nombre: "Lic. Maximiliano Contreras",
    rol: "Consultor asociado",
    // PLACEHOLDER: la especialidad está pendiente del cliente (en el Word dice "ANTO ARMA").
    especialidad: "Perfil profesional próximamente.",
    foto: "https://ui-avatars.com/api/?name=Maximiliano+Contreras&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/maximilianocontreras/",
  },
  {
    id: "mariana-bach",
    nombre: "Lic. Mariana Bach",
    rol: "Consultora asociada",
    especialidad:
      "Especialista en desarrollo organizacional, evaluación de perfiles y gestión del talento.",
    foto: "https://ui-avatars.com/api/?name=Mariana+Bach&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/mariana-bach-b9963120/",
  },
];
