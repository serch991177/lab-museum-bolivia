import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HISTORY_MILESTONES, HistoryMilestone } from '../../data/history.data';

interface HeroStat {
  value: string;
  label: string;
}

interface LegacyCard {
  value: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  heroStats: HeroStat[] = [
    {
      value: '1925',
      label: 'Año de fundación'
    },
    {
      value: '+80',
      label: 'Años de historia'
    },
    {
      value: 'LAB',
      label: 'Símbolo aéreo nacional'
    }
  ];

  historyMilestones: HistoryMilestone[] = HISTORY_MILESTONES;

  legacyCards: LegacyCard[] = [
    {
      value: '01',
      title: 'Identidad boliviana',
      description:
        'El LAB fue parte de la memoria de miles de pasajeros, familias, trabajadores y ciudades conectadas por aire.'
    },
    {
      value: '02',
      title: 'Aviones históricos',
      description:
        'Desde aeronaves clásicas como el Junkers F.13 hasta jets como el Boeing 727, su flota marcó distintas épocas.'
    },
    {
      value: '03',
      title: 'Legado de Cochabamba',
      description:
        'Su historia está profundamente conectada con Cochabamba, ciudad clave en el nacimiento y desarrollo del LAB.'
    }
  ];
}