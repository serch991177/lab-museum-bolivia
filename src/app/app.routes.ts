import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { History } from './features/history/history';
import { Fleet } from './features/fleet/fleet';
import { Videos } from './features/videos/videos';
import { Gallery } from './features/gallery/gallery';
import { Routes as RoutesPage } from './features/routes/routes';
import { About } from './features/about/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'LAB Museum Bolivia | Inicio'
  },
  {
    path: 'historia',
    component: History,
    title: 'Historia | LAB Museum Bolivia'
  },
  {
    path: 'flota',
    component: Fleet,
    title: 'Flota histórica | LAB Museum Bolivia'
  },
  {
    path: 'videos',
    component: Videos,
    title: 'Videos | LAB Museum Bolivia'
  },
  {
    path: 'galeria',
    component: Gallery,
    title: 'Galería | LAB Museum Bolivia'
  },
  {
    path: 'rutas',
    component: RoutesPage,
    title: 'Rutas históricas | LAB Museum Bolivia'
  },
  {
    path: 'acerca',
    component: About,
    title: 'Acerca del proyecto | LAB Museum Bolivia'
  },
  {
    path: '**',
    redirectTo: ''
  }
];