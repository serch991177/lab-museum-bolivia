export type RouteCategory =
  | 'Todos'
  | 'Nacional'
  | 'Internacional';

export interface LabRoute {
  city: string;
  country: string;
  airport?: string;
  category: Exclude<RouteCategory, 'Todos'>;
  description: string;
  highlight?: boolean;
}

export const ROUTE_CATEGORIES: RouteCategory[] = [
  'Todos',
  'Nacional',
  'Internacional'
];

export const LAB_ROUTES: LabRoute[] = [
  {
    city: 'Cochabamba',
    country: 'Bolivia',
    airport: 'Jorge Wilstermann',
    category: 'Nacional',
    description:
      'Ciudad histórica y punto clave en el nacimiento del Lloyd Aéreo Boliviano.',
    highlight: true
  },
  {
    city: 'La Paz',
    country: 'Bolivia',
    airport: 'El Alto',
    category: 'Nacional',
    description:
      'Una de las rutas nacionales más importantes por su conexión política, comercial y estratégica.'
  },
  {
    city: 'Santa Cruz',
    country: 'Bolivia',
    airport: 'Viru Viru / El Trompillo',
    category: 'Nacional',
    description:
      'Centro de conexión fundamental para rutas nacionales e internacionales.'
  },
  {
    city: 'Sucre',
    country: 'Bolivia',
    category: 'Nacional',
    description:
      'Ruta histórica hacia la capital constitucional de Bolivia.'
  },
  {
    city: 'Tarija',
    country: 'Bolivia',
    category: 'Nacional',
    description:
      'Destino nacional importante para la integración del sur boliviano.'
  },
  {
    city: 'Miami',
    country: 'Estados Unidos',
    category: 'Internacional',
    description:
      'Uno de los destinos internacionales más recordados en la etapa moderna del LAB.',
    highlight: true
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    category: 'Internacional',
    description:
      'Conexión histórica con uno de los centros urbanos más importantes de Sudamérica.'
  },
  {
    city: 'São Paulo',
    country: 'Brasil',
    category: 'Internacional',
    description:
      'Ruta internacional clave hacia Brasil y el mercado sudamericano.'
  },
  {
    city: 'Santiago',
    country: 'Chile',
    category: 'Internacional',
    description:
      'Conexión aérea hacia Chile y el Pacífico sur.'
  },
  {
    city: 'Madrid',
    country: 'España',
    category: 'Internacional',
    description:
      'Destino de gran valor simbólico por conectar Bolivia con Europa.',
    highlight: true
  }
];