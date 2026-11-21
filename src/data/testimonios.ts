// Casos y experiencias: testimonios de clientes, en el orden en que se muestran.
// - texto: un string por párrafo, con comillas tipográficas (“ ”) al principio
//   del primero y al final del último.
// - logo: se reutiliza el de experiencia.ts; si la empresa no tiene, no va.
import { sectores } from "./experiencia";

export interface Testimonio {
  id: string;
  texto: string[];
  nombre: string;
  cargo: string;
  empresa: string;
  linkedin: string;
  logo?: string;
}

/** Logo de un cliente de experiencia.ts. Falla en el build si el nombre no existe. */
function logoCliente(nombre: string): string {
  const cliente = sectores
    .flatMap((s) => s.clientes)
    .find((c) => c.nombre === nombre);
  if (!cliente) throw new Error(`No hay logo de "${nombre}" en experiencia.ts`);
  return cliente.logo;
}

export const testimonios: Testimonio[] = [
  {
    id: "soledad-cambiaso",
    texto: [
      "“Trabajar junto a Vía3 ha sido una experiencia muy enriquecedora para Avalian. Nos acompañaron en la creación de las escuelas de Ventas y de Atención, que hoy forman parte de la Universidad Avalian: espacios que permiten a nuestros colaboradores desarrollar habilidades, compartir experiencias y fortalecer sus prácticas cotidianas. Destaco especialmente la generosidad de Julio y su equipo para compartir su conocimiento y experiencia, así como su cercanía y compromiso para construir propuestas conectadas con nuestras necesidades.”",
    ],
    nombre: "Soledad Cambiaso",
    cargo: "Jefa de HRBP",
    empresa: "Avalian",
    linkedin: "https://www.linkedin.com/in/soledad-cambiaso-b97b7739/",
    logo: logoCliente("Avalian"),
  },
  {
    id: "pia-chialvo",
    texto: [
      "“Trabajar con Estudio Vía3 trascendió la capacitación tradicional: supieron leer nuestra realidad organizacional y co-crear una propuesta a medida para potenciar a nuestros mandos medios. Con una escucha activa y gran flexibilidad, nos acompañaron estratégicamente en la construcción de nuestro modelo de liderazgo, integrando de forma integral el aprendizaje, la cultura y nuestros procesos de Talento.”",
    ],
    nombre: "Pía Chialvo",
    cargo: "Gerente de Talento y Cultura",
    empresa: "Medifé",
    linkedin: "https://www.linkedin.com/in/piachialvo/",
  },
  {
    id: "maria-fernanda-sassone",
    texto: [
      "“Durante mi gestión como Coordinadora de Capacitación en Cablevisión S.A., tuve el placer de trabajar junto al equipo de Estudio Vía3 en el diseño de estrategias de aprendizaje y programas de formación a medida para acompañar la transformación digital de nuestros programas corporativos. En una organización de más de 10.000 colaboradores, su capacidad para comprender nuestras necesidades de negocio y traducirlas en propuestas pedagógicas innovadoras fue clave para potenciar el desarrollo de nuestros equipos.",
      "Destaco especialmente su solidez metodológica, cercanía y flexibilidad para co-crear soluciones de alto impacto, convirtiéndose en un socio estratégico clave para traducir nuestros objetivos de negocio en experiencias de aprendizaje genuinas y aplicables al día a día.”",
    ],
    nombre: "Maria Fernanda Sassone",
    cargo: "Ex Coordinadora de Capacitación, Gestión del Talento",
    empresa: "Cablevisión S.A.",
    linkedin: "https://www.linkedin.com/in/maria-fernanda-sassone/",
  },
  {
    id: "graciela-maciel",
    texto: [
      "“A lo largo de las distintas instancias en que trabajamos juntos, Vía3 se destacó por su profesionalismo, cercanía y capacidad para comprender las necesidades de la organización. Los programas de formación estuvieron muy bien diseñados y ejecutados, generando espacios de aprendizaje valiosos y aplicables al trabajo cotidiano. Destaco especialmente el compromiso del equipo y su habilidad para adaptar los contenidos a nuestra realidad y desafíos.”",
    ],
    nombre: "Graciela Maciel",
    cargo: "Jefa Corporativa de Recursos Humanos",
    empresa: "ID Logistics",
    linkedin: "https://www.linkedin.com/in/19682504/",
    logo: logoCliente("ID Logistics"),
  },
  {
    id: "felipe-fortuny-di-stefano",
    texto: [
      "“Con un enfoque cercano y adaptado a la dinámica real de nuestra planta textil, la capacitación de Vía3 fue un aporte concreto a la profesionalización de nuestros mandos medios, brindando herramientas prácticas para fortalecer el liderazgo y la comunicación de nuestras encargadas.”",
    ],
    nombre: "Felipe Fortuny Di Stefano",
    cargo: "Head of Supply Chain & Operations",
    empresa: "Selú",
    linkedin: "https://www.linkedin.com/in/felipe-fortuny-di-stefano/",
    logo: logoCliente("Selú"),
  },
];
