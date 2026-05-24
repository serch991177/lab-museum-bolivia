export type HistoryPhase =
  | 'Todos'
  | 'Orígenes'
  | 'Consolidación'
  | 'Modernización'
  | 'Expansión'
  | 'Legado';

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  tag: string;
  phase: Exclude<HistoryPhase, 'Todos'>;
  highlight?: boolean;
}

export const HISTORY_PHASES: HistoryPhase[] = [
  'Todos',
  'Orígenes',
  'Consolidación',
  'Modernización',
  'Expansión',
  'Legado'
];

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    year: '1925',
    title: 'Nacimiento del Lloyd Aéreo Boliviano',
    description:
      'El Lloyd Aéreo Boliviano fue fundado en Cochabamba y comenzó una historia que marcaría profundamente la aviación comercial del país.',
    tag: 'Fundación',
    phase: 'Orígenes',
    highlight: true
  },
  {
    year: '1925',
    title: 'Primeros vuelos con Junkers F.13',
    description:
      'Sus primeras operaciones estuvieron asociadas al Junkers F.13, una aeronave fundamental para los inicios de la aviación comercial en Bolivia.',
    tag: 'Primer avión',
    phase: 'Orígenes'
  },
  {
    year: '1930s',
    title: 'Primeras conexiones regionales',
    description:
      'Durante sus primeros años, el LAB comenzó a conectar ciudades bolivianas y a proyectarse como una empresa aérea estratégica para el país.',
    tag: 'Rutas iniciales',
    phase: 'Orígenes'
  },
  {
    year: '1941',
    title: 'Consolidación como aerolínea nacional',
    description:
      'El LAB pasó a tener un papel más fuerte dentro del Estado boliviano, consolidándose como una referencia aérea nacional.',
    tag: 'Nacionalización',
    phase: 'Consolidación',
    highlight: true
  },
  {
    year: '1950s',
    title: 'Crecimiento de operaciones nacionales',
    description:
      'La aerolínea fortaleció sus rutas internas y se convirtió en un actor clave para conectar regiones del país en una época donde el transporte terrestre era limitado.',
    tag: 'Integración',
    phase: 'Consolidación'
  },
  {
    year: '1960s',
    title: 'Nueva etapa de modernización',
    description:
      'La incorporación de aeronaves de mayor capacidad y mejor rendimiento permitió mejorar la experiencia de viaje y ampliar la visión internacional de la compañía.',
    tag: 'Modernización',
    phase: 'Modernización'
  },
  {
    year: '1968',
    title: 'Llegada del Lockheed L-188 Electra',
    description:
      'La llegada del Lockheed Electra representó una mejora importante en tiempos de vuelo, capacidad operativa y presencia internacional.',
    tag: 'Electra',
    phase: 'Modernización'
  },
  {
    year: '1970',
    title: 'Ingreso a la era jet',
    description:
      'Con la llegada del Boeing 727, el LAB ingresó a una etapa moderna de aviación a reacción, marcando una época recordada por muchos pasajeros.',
    tag: 'Era jet',
    phase: 'Modernización',
    highlight: true
  },
  {
    year: '1970s',
    title: 'El Boeing 727 como símbolo del LAB',
    description:
      'El Boeing 727 se convirtió en una de las aeronaves más representativas del LAB y en una imagen muy asociada a la memoria aérea boliviana.',
    tag: 'Boeing 727',
    phase: 'Modernización'
  },
  {
    year: '1980s',
    title: 'Expansión de rutas internacionales',
    description:
      'El LAB fortaleció su presencia internacional conectando Bolivia con destinos importantes de América y otros mercados.',
    tag: 'Internacional',
    phase: 'Expansión'
  },
  {
    year: '1990s',
    title: 'Una marca reconocida por generaciones',
    description:
      'Durante esta etapa, el nombre LAB era ampliamente reconocido por pasajeros bolivianos y extranjeros, formando parte de la identidad aérea nacional.',
    tag: 'Marca histórica',
    phase: 'Expansión'
  },
  {
    year: '2000s',
    title: 'Crisis y declive operativo',
    description:
      'Problemas económicos, administrativos y operativos afectaron la continuidad de sus servicios regulares, iniciando una etapa de incertidumbre.',
    tag: 'Crisis',
    phase: 'Legado'
  },
  {
    year: 'Actualidad',
    title: 'Un legado que permanece',
    description:
      'Aunque dejó de operar regularmente, el LAB sigue vivo en la memoria de Bolivia como una de sus instituciones aéreas más emblemáticas.',
    tag: 'Memoria',
    phase: 'Legado',
    highlight: true
  }
];