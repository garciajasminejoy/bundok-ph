import { Injectable, signal } from '@angular/core';
import { Mountain } from '../../core/interfaces/mountain.interface';

@Injectable({
  providedIn: 'root',
})
export class MountainsService {
  private hikes = signal<Mountain[]>([
    {
      id: 1,
      name: 'Mount Pulag',
      location: 'Cordillera',
      difficulty: 'Hard',
      distance: '8.5 km',
      elevationGain: 2500,
    },
    {
      id: 2,
      name: 'Mount Batulao',
      location: 'Batangas',
      difficulty: 'Moderate',
      distance: '5 km',
      elevationGain: 800,
    },
  ]);

  constructor() {}

  getMountainById(id: number) {
    return this.hikes().find((hike) => hike.id === id);
  }

  getAllMountains() {
    return this.hikes();
  }

  getAllMountainsSignal() {
    return this.hikes.asReadonly();
  }
}
