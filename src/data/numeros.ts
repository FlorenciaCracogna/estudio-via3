// Banda de números debajo del Hero (BandaNumeros.tsx): count-up al entrar en pantalla.
// Valores reales informados por el cliente.
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
  { label: "Años", valor: 20 },
  { label: "Proyectos", valor: 400, prefijo: "+" },
  { label: "Personas formadas", valor: 12000, prefijo: "+" },
  { label: "Clientes", valor: 100, prefijo: "+" },
];
