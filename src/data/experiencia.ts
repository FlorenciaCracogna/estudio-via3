// Experiencia (Word 2026): los 8 sectores en el orden del Word, con sus clientes.
// - logo: URL de Cloudinary (la grilla de /experiencia le aplica e_trim).
// - carrusel: aparece en el carrusel del home (los que ya estaban destacados).

export interface Cliente {
  nombre: string;
  logo: string;
  carrusel?: boolean;
}

export interface Sector {
  id: string;
  nombre: string;
  clientes: Cliente[];
}

export const sectores: Sector[] = [
  {
    id: "consumo-masivo",
    nombre: "Consumo masivo, retail y alimentos",
    clientes: [
      { nombre: "Arcos Dorados (McDonald's)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397184/arcos-dorados_j3x3tp.jpg", carrusel: true },
      { nombre: "Molinos Río de la Plata", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397187/molinos_b86vyc.jpg", carrusel: true },
      { nombre: "Nestlé Waters", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397172/nestle_trj3yl.jpg", carrusel: true },
      { nombre: "Grupo Peñaflor", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397167/grupo-penaflor_itgqsd.jpg" },
      { nombre: "Quickfood", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397157/quickfood_vbtjse.jpg" },
      { nombre: "PepsiCo", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397137/pepsico_nd0ota.jpg", carrusel: true },
      { nombre: "Freddo", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397136/freddo_u2fhh3.jpg" },
      { nombre: "DIA", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397117/dia_mjgep4.jpg" },
      { nombre: "Perfumerías Pigmento", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397158/pigmento_huv2qr.jpg" },
      { nombre: "Nobleza Piccardo", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397136/nobleza-picardo_izl9pa.jpg" },
      { nombre: "Efrén López Mayorista", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396873/efren-lopez_vqz8mm.jpg" },
      { nombre: "Costumbres Argentinas", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396884/costumbres-argentinas_noii6k.jpg" },
      { nombre: "Tupperware", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397168/tupperware_bjprcu.jpg" },
      { nombre: "Carrefour", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397116/carrefour_agnt7z.jpg", carrusel: true },
      { nombre: "Jumbo", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397117/jumbo_g6w0hg.jpg" },
      { nombre: "Farmacity", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397177/farmacity_fd6ctr.jpg", carrusel: true },
      { nombre: "The Food Market", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793390658/the-food-market_vcsuc8.jpg" },
      { nombre: "Avon", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397149/avon_pbirmt.jpg", carrusel: true },
      { nombre: "Gillette", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396880/gillette_riqmla.jpg", carrusel: true },
      { nombre: "Barugel", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396882/barugel_qkpqwf.jpg" },
      { nombre: "Selú", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1789226495/selu_ld9jcx.jpg" },
    ],
  },
  {
    id: "industria",
    nombre: "Industria, manufactura y producción",
    clientes: [
      { nombre: "AcerBrag", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397179/acer-brag_jbtvas.jpg" },
      { nombre: "Fate", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397179/fate_kttinj.jpg" },
      { nombre: "Techint", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397175/techint_vpp9xi.jpg", carrusel: true },
      { nombre: "Ternium", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397174/ternium_oypoxk.jpg", carrusel: true },
      { nombre: "Timbó", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397171/timbo_ztwfdj.jpg" },
      { nombre: "ESAB", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397154/esab_jxunac.jpg" },
      { nombre: "Axionlog", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397169/axionlog_fwc1xe.jpg" },
      { nombre: "Parex", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397160/parex_jtkrsl.jpg" },
      { nombre: "Lear", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396890/lear_rsljtb.jpg" },
      { nombre: "Kimberly-Clark", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397138/kimberly-clark_p2hdvj.jpg", carrusel: true },
      { nombre: "Bosch", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397163/bosch_cyw670.jpg", carrusel: true },
      { nombre: "Wiebel", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396873/wiebel_grqkgj.jpg" },
      { nombre: "Coca-Cola FEMSA", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397155/femsa_gjc6jl.jpg" },
      { nombre: "EG Impresores", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396883/impresores_djszzt.jpg" },
    ],
  },
  {
    id: "energia",
    nombre: "Energía, petróleo, gas y recursos naturales",
    clientes: [
      { nombre: "Tecpetrol", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397173/tecpetrol_yyfzvk.jpg" },
      { nombre: "Chevron", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397165/chevron_boeqjb.jpg", carrusel: true },
      { nombre: "Petrobras", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397116/petrobras_sa2sg6.jpg", carrusel: true },
      { nombre: "Occidental Petroleum (OXY)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397166/occidental_ohj5lg.jpg" },
      { nombre: "Naturgy", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396938/naturgy_humgv2.jpg" },
      { nombre: "Profertil", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397161/profertil_rzvni6.jpg" },
      { nombre: "Nidera", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397164/nidera_pcwsql.jpg" },
    ],
  },
  {
    id: "servicios-financieros",
    nombre: "Servicios financieros, banca y seguros",
    clientes: [
      { nombre: "Banco Ciudad", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397127/banco-ciudad_fl9ubn.jpg" },
      { nombre: "Banco Supervielle", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397119/supervielle_grmpcx.jpg" },
      { nombre: "Banco Hipotecario", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397124/banco-hipotecario_fd2k4a.jpg" },
      { nombre: "Banco Macro", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397125/macro_rpequt.jpg" },
      { nombre: "BBVA", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397125/bbva_ck4xde.jpg", carrusel: true },
      { nombre: "Santander", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397130/santander_t6fnqm.jpg", carrusel: true },
      { nombre: "Naranja X", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793390658/naranja-x_eia0vu.png" },
      { nombre: "Red Link", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1793391005/Red_link_logo_iwbwrt.png" },
      { nombre: "Caja de Valores", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397130/caja-de-valores_fvkiem.jpg" },
      { nombre: "Nación Seguros", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1789226495/nacion-seguros_nglsaq.jpg", carrusel: true },
      { nombre: "MAPFRE", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396890/mapfre_zm9ldu.jpg", carrusel: true },
      { nombre: "La Segunda Seguros", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397184/la-segunda_lzskgi.jpg", carrusel: true },
    ],
  },
  {
    id: "salud-y-ciencias-de-la-vida",
    nombre: "Salud y ciencias de la vida",
    clientes: [
      { nombre: "Swiss Medical", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397180/swiss-medical_m8zovp.jpg", carrusel: true },
      { nombre: "Avalian", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397178/avalian_nsm1zw.jpg" },
      { nombre: "OSPE (Obra Social de Petroleros)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397131/ospe_omhifj.jpg" },
      { nombre: "Novocap", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396889/novocap_autalm.jpg" },
      { nombre: "Tecnofarma", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396886/tecnofarma_exurij.jpg" },
      { nombre: "Schering-Plough", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396886/schering-plough_s99ufl.jpg" },
    ],
  },
  {
    id: "tecnologia",
    nombre: "Tecnología, telecomunicaciones y servicios",
    clientes: [
      { nombre: "Telecom", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397183/telecom_ozguvx.jpg", carrusel: true },
      { nombre: "Grupo Clarín", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396889/grupo-clarin_vzf6cm.jpg" },
      // El PNG es la versión para fondo oscuro (las "i" y la bajada son blancas):
      // e_replace_color pasa el blanco a gris oscuro para que se lea sobre la tarjeta blanca.
      { nombre: "Linkit Global", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/e_replace_color:4b5563:40:ffffff/v1793391004/Linkit_phd461.png" },
      { nombre: "WiseTech Global", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397131/wisetech-global_ttnw9g.jpg" },
      { nombre: "Turner Broadcasting", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397132/turner_lvar6g.jpg" },
      { nombre: "Nyvus Net", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397148/nyvusnet_donhvt.jpg" },
      { nombre: "BDO", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397152/dbo_c6yx6c.jpg" },
      { nombre: "SMS Buenos Aires", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397150/sms_pbmi96.jpg" },
      { nombre: "Amerian Hotel Casino Gala", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396879/amerian_jnyk67.jpg" },
      { nombre: "Gala Hotel & Convenciones", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396878/gala_q2rqoi.jpg" },
      { nombre: "Club de Amigos", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396885/club-de-amigos_csgkqd.jpg" },
    ],
  },
  {
    id: "logistica",
    nombre: "Logística, transporte, movilidad e infraestructura",
    clientes: [
      { nombre: "LATAM Airlines", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397183/latam_zth1cm.jpg", carrusel: true },
      { nombre: "Cruz del Sur", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396881/cruz-del-sur_ggllm4.jpg" },
      { nombre: "La Postal", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397117/la-postal_ijvoe0.jpg" },
      { nombre: "ID Logistics", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397117/id-logistics_dijlvm.jpg" },
      { nombre: "Autopistas del Oeste", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397136/autopistas-del-oeste_liyqvd.jpg" },
      { nombre: "SACDE", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396880/sacde_nla7mb.jpg" },
      { nombre: "Elecnor", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397153/elecnor_jxttal.jpg" },
      { nombre: "ACA (Automóvil Club Argentino)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397159/aca_neuiqu.jpg" },
      { nombre: "Hogar", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396875/hogar_vcdhhm.jpg" },
      { nombre: "Car France", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396877/carfrance_o2l5ko.jpg" },
      { nombre: "Metz Peugeot", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396876/metz_wtiub7.jpg" },
      { nombre: "Kyoto Nissan", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396876/nissan_ywhoqq.jpg", carrusel: true },
    ],
  },
  {
    id: "educacion",
    nombre: "Educación, instituciones y organizaciones",
    clientes: [
      { nombre: "IDEA", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396873/idea_i39upd.jpg" },
      { nombre: "Universidad de Belgrano", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396873/universidad-de-belgrano_rwszyo.jpg" },
      { nombre: "Universidad del Salvador", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396872/universidad-del-salvador_nopnah.jpg" },
      { nombre: "Universidad de Morón", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396872/universidad-de-moron_mu3eti.jpg" },
      { nombre: "Organización Internacional para las Migraciones (OIM)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396873/oim_hzfuor.jpg" },
      { nombre: "Asociación de Cooperativas Argentinas (ACA)", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782397149/asoc-coop-arg_hujc0d.jpg" },
      { nombre: "IAEA", logo: "https://res.cloudinary.com/dg8rew4w9/image/upload/v1782396872/iaea_uk2wzc.jpg" },
    ],
  },
];

/** Logos del carrusel del home. */
export const clientesCarrusel = sectores
  .flatMap((s) => s.clientes)
  .filter((c) => c.carrusel);
