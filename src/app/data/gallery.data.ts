export type GalleryCategory =
  | 'Todos'
  | 'Aviones'
  | 'Aeropuertos'
  | 'Tripulación'
  | 'Publicidad'
  | 'Recuerdos';

export interface GalleryImage {
  title: string;
  description: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  year: string;
  image: string;
  featured?: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Aviones',
  'Aeropuertos',
  'Tripulación',
  'Publicidad',
  'Recuerdos'
];

export const LAB_GALLERY: GalleryImage[] = [
  {
    title: 'Boeing 727 LAB',
    description: 'Una de las aeronaves más recordadas del Lloyd Aéreo Boliviano.',
    category: 'Aviones',
    year: 'Archivo',
    image: '/images/fleet/boeing-727.jpg',
    featured: true
  },
  {
    title: 'Boeing 707 LAB',
    description: 'Aeronave ligada a la etapa internacional del LAB.',
    category: 'Aviones',
    year: 'Archivo',
    image: '/images/fleet/boeing-707.jpg'
  },
  {
    title: 'Airbus A310 LAB',
    description: 'Fuselaje ancho utilizado en rutas internacionales.',
    category: 'Aviones',
    year: 'Archivo',
    image: '/images/fleet/airbus-a310.jpg'
  },
  {
    title: 'Aeropuerto y operaciones',
    description: 'Imágenes relacionadas con operaciones históricas del LAB.',
    category: 'Aeropuertos',
    year: 'Archivo',
    image: '/images/gallery/airport.jpg'
  },
  {
    title: 'Tripulación LAB',
    description: 'Memoria visual de pilotos, auxiliares y personal operativo.',
    category: 'Tripulación',
    year: 'Archivo',
    image: '/images/gallery/crew.jpg'
  },
  {
    title: 'Publicidad antigua',
    description: 'Material publicitario y gráfico histórico del LAB.',
    category: 'Publicidad',
    year: 'Archivo',
    image: '/images/gallery/poster.jpg'
  },
  {
    title: 'Boletos y recuerdos',
    description: 'Objetos, boletos, documentos y recuerdos de pasajeros.',
    category: 'Recuerdos',
    year: 'Archivo',
    image: '/images/gallery/memories.jpg'
  }
];