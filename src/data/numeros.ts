// Banda de números del Hero (count-up al entrar en pantalla).
// PENDIENTE DEL CLIENTE: completar `valor` con un número (ej. 25).
// Sólo se muestran los que tienen valor; si ninguno tiene, la banda no aparece.

export interface NumeroHero {
  label: string;
  valor: number | null;
  /** Texto antes del número, ej. "+" para "+300". */
  prefijo?: string;
  /** Texto después del número, ej. "%" o "k". */
  sufijo?: string;
}

export const numerosHero: NumeroHero[] = [
  { label: "Años", valor: null },
  { label: "Proyectos", valor: null, prefijo: "+" },
  { label: "Personas", valor: null, prefijo: "+" },
  { label: "Clientes", valor: null, prefijo: "+" },
];
