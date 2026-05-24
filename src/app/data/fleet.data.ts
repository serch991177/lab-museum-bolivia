export type AircraftCategory =
  | 'Todos'
  | 'Pioneros'
  | 'Clásicos'
  | 'Jet'
  | 'Internacional';

export interface Aircraft {
  name: string;
  model: string;
  category: Exclude<AircraftCategory, 'Todos'>;
  introduced: string;
  retired: string;
  image: string;
  shortDescription: string;
  description: string;
  highlight?: boolean;
  specs: {
    role: string;
    engines: string;
    era: string;
  };
}

export const AIRCRAFT_CATEGORIES: AircraftCategory[] = [
  'Todos',
  'Pioneros',
  'Clásicos',
  'Jet',
  'Internacional'
];

export const FLEET_AIRCRAFT: Aircraft[] = [
  {
    name: 'Junkers F.13',
    model: 'Junkers F.13',
    category: 'Pioneros',
    introduced: '1925',
    retired: '1933',
    image: '/images/fleet/junkers-f13.jpg',
    shortDescription: 'El avión pionero de los primeros años del LAB.',
    description:
      'El Junkers F.13 representa los orígenes del Lloyd Aéreo Boliviano y el inicio de la aviación comercial moderna en Bolivia.',
    specs: {
      role: 'Transporte inicial',
      engines: 'Monomotor',
      era: 'Primeros vuelos'
    }
  },
  {
    name: 'Douglas DC-3',
    model: 'Douglas DC-3 / C-47',
    category: 'Clásicos',
    introduced: '1945',
    retired: 'Histórico',
    image: '/images/fleet/douglas-dc3.jpg',
    shortDescription: 'Un clásico mundial de la aviación comercial.',
    description:
      'El DC-3 fue una aeronave clave para muchas aerolíneas del mundo y forma parte de la etapa clásica de crecimiento de la aviación regional.',
    specs: {
      role: 'Pasajeros y carga',
      engines: 'Bimotor',
      era: 'Aviación clásica'
    }
  },
  {
    name: 'Douglas DC-4',
    model: 'Douglas DC-4',
    category: 'Clásicos',
    introduced: '1955',
    retired: '1961',
    image: '/images/fleet/douglas-dc4.jpg',
    shortDescription: 'Mayor alcance y capacidad para nuevas rutas.',
    description:
      'El DC-4 permitió fortalecer operaciones de mayor distancia y acompañó el crecimiento de la conectividad aérea boliviana.',
    specs: {
      role: 'Pasajeros',
      engines: 'Cuatrimotor',
      era: 'Consolidación'
    }
  },
  {
    name: 'Lockheed Electra',
    model: 'Lockheed L-188 Electra',
    category: 'Clásicos',
    introduced: '1968',
    retired: '1973',
    image: '/images/fleet/electra.jpg',
    shortDescription: 'Modernización antes de la era jet.',
    description:
      'El Lockheed L-188 Electra representó una mejora importante en velocidad, confort y capacidad operativa antes de la llegada plena de los jets.',
    specs: {
      role: 'Pasajeros',
      engines: 'Turbohélice',
      era: 'Modernización'
    }
  },
  {
    name: 'Boeing 707',
    model: 'Boeing 707',
    category: 'Internacional',
    introduced: '1977',
    retired: '2000',
    image: '/images/fleet/boeing-707.jpg',
    shortDescription: 'Jet de largo alcance para rutas internacionales.',
    description:
      'El Boeing 707 fortaleció la presencia internacional del LAB y simbolizó una etapa de mayor alcance operativo.',
    specs: {
      role: 'Largo alcance',
      engines: 'Cuatrirreactor',
      era: 'Expansión internacional'
    }
  },
  {
    name: 'Boeing 727',
    model: 'Boeing 727-100 / 727-200',
    category: 'Jet',
    introduced: '1970',
    retired: '2008',
    image: '/images/fleet/boeing-727.jpg',
    shortDescription: 'El avión más icónico y recordado del LAB.',
    description:
      'El Boeing 727 se convirtió en una de las aeronaves más representativas del Lloyd Aéreo Boliviano, especialmente por su presencia en rutas nacionales e internacionales.',
    highlight: true,
    specs: {
      role: 'Pasajeros',
      engines: 'Trirreactor',
      era: 'Era jet'
    }
  },
  {
    name: 'Boeing 737-300',
    model: 'Boeing 737-300',
    category: 'Jet',
    introduced: '1996',
    retired: '2008',
    image: '/images/fleet/boeing-737.jpg',
    shortDescription: 'Jet moderno para rutas regionales.',
    description:
      'El Boeing 737-300 formó parte de la etapa moderna de la flota del LAB, con operación eficiente para rutas de corto y mediano alcance.',
    specs: {
      role: 'Corto y mediano alcance',
      engines: 'Birreactor',
      era: 'Modernización'
    }
  },
  {
    name: 'Boeing 767-300ER',
    model: 'Boeing 767-300ER',
    category: 'Internacional',
    introduced: '2002',
    retired: '2006',
    image: '/images/fleet/boeing-767.jpg',
    shortDescription: 'Aeronave de largo alcance para grandes rutas.',
    description:
      'El Boeing 767-300ER representó una etapa de operación internacional de largo alcance en los últimos años de expansión del LAB.',
    specs: {
      role: 'Largo alcance',
      engines: 'Birreactor',
      era: 'Última expansión'
    }
  },
  {
    name: 'Airbus A310',
    model: 'Airbus A310',
    category: 'Internacional',
    introduced: '1991',
    retired: '2004',
    image: '/images/fleet/airbus-a310.jpg',
    shortDescription: 'Widebody europeo usado en rutas internacionales.',
    description:
      'El Airbus A310 fue parte de la flota internacional del LAB y refleja una etapa de diversificación de aeronaves de fuselaje ancho.',
    specs: {
      role: 'Internacional',
      engines: 'Birreactor',
      era: 'Expansión'
    }
  },
  {
    name: 'Fokker F27',
    model: 'Fokker F27 Friendship',
    category: 'Clásicos',
    introduced: '1987',
    retired: '2004',
    image: '/images/fleet/fokker-f27.jpg',
    shortDescription: 'Turbohélice regional para rutas internas.',
    description:
      'El Fokker F27 Friendship fue una aeronave regional útil para conexiones nacionales y rutas de menor demanda.',
    specs: {
      role: 'Regional',
      engines: 'Turbohélice',
      era: 'Operación regional'
    }
  }
];