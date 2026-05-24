import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HISTORY_MILESTONES,
  HISTORY_PHASES,
  HistoryMilestone,
  HistoryPhase
} from '../../data/history.data';

interface DocumentaryStat {
  value: string;
  label: string;
}

interface HistoryInsight {
  title: string;
  description: string;
}

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class History {
  phases: HistoryPhase[] = HISTORY_PHASES;

  selectedPhase: HistoryPhase = 'Todos';

  milestones: HistoryMilestone[] = HISTORY_MILESTONES;

  documentaryStats: DocumentaryStat[] = [
    {
      value: '1925',
      label: 'Inicio de la historia'
    },
    {
      value: 'CBB',
      label: 'Raíz cochabambina'
    },
    {
      value: '727',
      label: 'Ícono de la era jet'
    },
    {
      value: '+80',
      label: 'Años de memoria aérea'
    }
  ];

  insights: HistoryInsight[] = [
    {
      title: 'Una aerolínea de identidad nacional',
      description:
        'El LAB no solo transportaba pasajeros: conectaba familias, regiones, historias personales y momentos importantes del país.'
    },
    {
      title: 'Cochabamba como punto de partida',
      description:
        'La historia del LAB está fuertemente ligada a Cochabamba, ciudad que vio nacer uno de los nombres más recordados de la aviación boliviana.'
    },
    {
      title: 'Aviones que marcaron épocas',
      description:
        'Desde aeronaves pioneras hasta jets modernos, la flota del LAB representa distintas etapas de desarrollo tecnológico y operativo.'
    }
  ];

  get filteredMilestones(): HistoryMilestone[] {
    if (this.selectedPhase === 'Todos') {
      return this.milestones;
    }

    return this.milestones.filter(
      milestone => milestone.phase === this.selectedPhase
    );
  }

  selectPhase(phase: HistoryPhase): void {
    this.selectedPhase = phase;
  }
}