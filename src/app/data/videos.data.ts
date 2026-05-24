export type VideoCategory =
  | 'Todos'
  | 'Documental'
  | 'Despegues'
  | 'Aterrizajes'
  | 'Comerciales'
  | 'Recuerdos';

export interface LabVideo {
  title: string;
  description: string;
  category: Exclude<VideoCategory, 'Todos'>;
  year: string;
  youtubeId: string;
  featured?: boolean;
}

export const VIDEO_CATEGORIES: VideoCategory[] = [
  'Todos',
  'Documental',
  'Despegues',
  'Aterrizajes',
  'Comerciales',
  'Recuerdos'
];

export const LAB_VIDEOS: LabVideo[] = [
  {
    title: 'Historia del Lloyd Aéreo Boliviano',
    description:
      'Video documental sobre la historia, legado y memoria del LAB.',
    category: 'Documental',
    year: 'Archivo',
    youtubeId: 'VIDEO_ID_AQUI',
    featured: true
  },
  {
    title: 'Boeing 727 del LAB',
    description:
      'Registro visual del Boeing 727, una de las aeronaves más recordadas del Lloyd Aéreo Boliviano.',
    category: 'Despegues',
    year: 'Archivo',
    youtubeId: 'VIDEO_ID_AQUI'
  },
  {
    title: 'Aterrizaje LAB en Bolivia',
    description:
      'Material histórico o de aficionados mostrando operaciones del LAB.',
    category: 'Aterrizajes',
    year: 'Archivo',
    youtubeId: 'VIDEO_ID_AQUI'
  },
  {
    title: 'Comercial antiguo del LAB',
    description:
      'Publicidad histórica relacionada con la marca Lloyd Aéreo Boliviano.',
    category: 'Comerciales',
    year: 'Archivo',
    youtubeId: 'VIDEO_ID_AQUI'
  },
  {
    title: 'Recuerdos de pasajeros',
    description:
      'Videos nostálgicos y recuerdos relacionados con vuelos del LAB.',
    category: 'Recuerdos',
    year: 'Archivo',
    youtubeId: 'VIDEO_ID_AQUI'
  }
];