// Sedes de Vía3: datos de contacto en un solo lugar. Los usan el footer, el
// botón flotante de WhatsApp y la sección Contacto.
// (El JSON-LD de src/lib/seo.ts repite los teléfonos en formato internacional:
// si cambia un número, actualizarlo también ahí.)

/** Mensaje prearmado de todos los links de WhatsApp. */
export const MENSAJE_WHATSAPP =
  "Hola, vengo del sitio web de Vía3 y quiero hacer una consulta.";

export interface Sede {
  id: "buenos-aires" | "nea";
  nombre: string;
  /** Teléfono tal como se muestra en el sitio. */
  telefono: string;
  /** Número para wa.me: sólo dígitos, con código de país y de área, sin 0 ni 15. */
  whatsapp: string;
  mail: string;
  direccion: string;
  mapSrc: string;
  mapTitle: string;
}

export const sedes: Sede[] = [
  {
    id: "buenos-aires",
    nombre: "Sede Buenos Aires",
    telefono: "+5411 51806029",
    whatsapp: "541151806029",
    mail: "julio.capra@estudiovia3.com.ar",
    direccion: "Avda. Del Libertador 5582 – 14 D - CABA",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.7111432390343!2d-58.446970524946025!3d-34.56086835523525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5c9608fdfa7%3A0xf9a8644fb79679d8!2sAv.%20del%20Libertador%205582%2C%20C1426%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1781016814668!5m2!1ses!2sar",
    mapTitle: "Ubicación Sede Buenos Aires",
  },
  {
    id: "nea",
    nombre: "Sede NEA",
    telefono: "+54362 4388507",
    whatsapp: "543624388507",
    mail: "antonella.cracogna@estudiovia3.com.ar",
    direccion: "Santiago del Estero 636 – Resistencia, Chaco",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.804769298111!2d-58.99637730380771!3d-27.449372720192862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450d76712d733f%3A0x231520d84f9cb6c7!2sLic.%20en%20Psicolog%C3%ADa%20Antonella%20Cracogna!5e0!3m2!1ses!2sar!4v1781707500043!5m2!1ses!2sar",
    mapTitle: "Ubicación Sede NEA",
  },
];

/** Sede por id (para mostrarlas en un orden propio, por ejemplo NEA primero). */
export const sedePorId = (id: Sede["id"]) =>
  sedes.find((s) => s.id === id) as Sede;

/** Link de WhatsApp a la sede, con el mensaje prearmado codificado en la URL. */
export const whatsappHref = (sede: Sede) =>
  `https://wa.me/${sede.whatsapp}?text=${encodeURIComponent(MENSAJE_WHATSAPP)}`;
