import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  LAB_ROUTES,
  LabRoute,
  ROUTE_CATEGORIES,
  RouteCategory
} from '../../data/routes.data';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routes.html',
  styleUrl: './routes.scss'
})
export class Routes {
  categories: RouteCategory[] = ROUTE_CATEGORIES;

  selectedCategory: RouteCategory = 'Todos';

  routes: LabRoute[] = LAB_ROUTES;

  get filteredRoutes(): LabRoute[] {
    if (this.selectedCategory === 'Todos') {
      return this.routes;
    }

    return this.routes.filter(route => route.category === this.selectedCategory);
  }

  selectCategory(category: RouteCategory): void {
    this.selectedCategory = category;
  }
}