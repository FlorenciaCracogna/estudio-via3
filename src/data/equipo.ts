export interface Integrante {
  id: string;
  nombre: string;
  foto: string; // reemplazar con URL de Cloudinary cuando estén las fotos
  linkedin: string;
  bullets: string[];
}

export const equipo: Integrante[] = [
  {
    id: "julio-capra",
    nombre: "Lic. Julio Capra",
    foto: "https://ui-avatars.com/api/?name=Julio+Capra&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/juliocapra/",
    bullets: [
      "Julio es Socio Director de Vía3 y tiene a su cargo los proyectos de Gestión Estratégica de la Capacitación, Desarrollo Organizacional y Coaching.",
      "Se graduó como licenciado en Ciencias de la Educación y especializó sus estudios en Teorías Cognitivas del Aprendizaje y Formación de Formadores. Es además Coach Ontológico certificado por la ICF.",
      "En la primera etapa de su ejercicio profesional se desempeñó en jefaturas y gerencias de Capacitación y Planeamiento en el negocio bancario. El desarrollo de su carrera se orientó, hace más de veinte años, a la consultoría y desde entonces ha trabajado como Consultor Magister asesorando en temas de Gestión de la Capacitación, Planeamiento y Desarrollo de RRHH a empresas nacionales y multinacionales, a Escuelas de Negocios y a Organismos Internacionales.",
      "Comparte su experiencia y saberes participando en el desarrollo de profesionales en formación en la Universidad de Buenos Aires (Facultad de Filosofía y Letras y Facultad de Psicología), en la Universidad de Belgrano, en la Escuela de Negocios de IDEA, en la Universidad de San Andrés y en el Instituto Tecnológico de Buenos Aires.",
      "En 2008 fundó Vía3, estudio especializado en la creación y desarrollo de Soluciones de Aprendizaje.",
    ],
  },
  {
    id: "antonella-cracogna",
    nombre: "Lic. Antonella Cracogna",
    foto: "https://ui-avatars.com/api/?name=Antonella+Cracogna&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/antonella-cracogna-94b2a8105/",
    bullets: [
      "Antonella es socia de Vía3 y tiene a su cargo los proyectos de Relaciones interpersonales, Gestión de las emociones y Hábitos para la salud laboral; además de la gestión de los servicios del Estudio en el NEA.",
      "Se graduó como licenciada en Psicología y especializó sus estudios en Terapia cognitiva conductual y Medicina del Estrés. Es además Coach Ontológico certificada por el Instituto Argentino de Coaching.",
      "La primera etapa de su ejercicio profesional se desarrolló en el área laboral de la psicología, se especializó en Recursos Humanos desempeñando diversos cargos en empresas. Desde el 2018 se orientó a la psicología clínica a través de la psicoterapia individual con jóvenes y adultos, trabajo que mantiene actualmente en un consultorio privado.",
      "Paralelamente y hace 15 años, dedica e invierte su tiempo como voluntaria en organizaciones sociales, entre ellas TECHO, en la cual trabajó como Directora de la Sede Corrientes Chaco.",
      "En el último tiempo aporta sus conocimientos en el sector público; coordinando la Usina Urbana del Instituto de Viviendas del Chaco, un espacio de formación para jóvenes.",
      "Es además capacitadora en Herramientas socioemocionales para diversas fundaciones e instituciones.",
    ],
  },
  {
    id: "maximiliano-contreras",
    nombre: "Lic. Maximiliano Contreras",
    foto: "https://ui-avatars.com/api/?name=Maximiliano+Contreras&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/maximilianocontreras/",
    bullets: ["Información del perfil próximamente."],
  },
  {
    id: "mariana-bach",
    nombre: "Lic. Mariana Bach",
    foto: "https://ui-avatars.com/api/?name=Mariana+Bach&background=99042F&color=fff&size=300&font-size=0.33",
    linkedin: "https://www.linkedin.com/in/mariana-bach-b9963120/",
    bullets: [
      "Mariana integra el equipo de Vía3 y tiene bajo su responsabilidad los proyectos relacionados con estrategias y herramientas de desarrollo, evaluación de perfiles laborales, construcción de mapa de saberes y gestión de las emociones.",
      "Se graduó como licenciada en Psicología y cuenta con un Posgrado en Psicología Clínica. Complementa su formación con estudios de neurociencias, inteligencia emocional y coaching.",
      "En la primera etapa de su ejercicio profesional se desempeñó como responsable de áreas de selección y desarrollo en empresas de servicios. Más adelante continuó su desarrollo profesional en la consultoría; participando de múltiples proyectos tanto en el mercado industrial como en el de servicios y el de tecnología.",
      "Durante varios años acompañó proyectos estratégicos en el ámbito de IDEA; integrando el staff de profesionales de los programas de formación en Management.",
    ],
  },
];
