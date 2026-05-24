import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AIRCRAFT_CATEGORIES,
  Aircraft,
  AircraftCategory,
  FLEET_AIRCRAFT
} from '../../data/fleet.data';

interface FleetStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fleet.html',
  styleUrl: './fleet.scss'
})
export class Fleet {
  categories: AircraftCategory[] = AIRCRAFT_CATEGORIES;

  selectedCategory: AircraftCategory = 'Todos';

  aircraft: Aircraft[] = FLEET_AIRCRAFT;

  fleetStats: FleetStat[] = [
    {
      value: '1925',
      label: 'Primeras operaciones'
    },
    {
      value: '727',
      label: 'Ícono histórico'
    },
    {
      value: 'Jet',
      label: 'Era moderna'
    },
    {
      value: '+10',
      label: 'Modelos destacados'
    }
  ];

  get filteredAircraft(): Aircraft[] {
    if (this.selectedCategory === 'Todos') {
      return this.aircraft;
    }

    return this.aircraft.filter(
      aircraft => aircraft.category === this.selectedCategory
    );
  }

  get featuredAircraft(): Aircraft | undefined {
    return this.aircraft.find(aircraft => aircraft.highlight);
  }

  selectCategory(category: AircraftCategory): void {
    this.selectedCategory = category;
  }
}