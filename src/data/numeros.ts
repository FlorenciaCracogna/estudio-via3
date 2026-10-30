// Banda de números del Hero (aparece con el primer scroll y hace count-up).
//
// ⚠️ PLACEHOLDER: reemplazar con los datos del cliente antes del deploy.
//    Los valores de abajo (25, +500, +12.000, +100) son de EJEMPLO.
//
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
  { label: "Años", valor: 25 }, // PLACEHOLDER
  { label: "Proyectos", valor: 500, prefijo: "+" }, // PLACEHOLDER
  { label: "Personas", valor: 12000, prefijo: "+" }, // PLACEHOLDER
  { label: "Clientes", valor: 100, prefijo: "+" }, // PLACEHOLDER
];
