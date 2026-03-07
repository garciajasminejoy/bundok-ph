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
      difficulty: '3/9',
      distance: '8.5 km',
      elevationGain: 2500,
      description: 'Mount Pulag is the third highest mountain in the Philippines, known for its stunning sunrise views and sea of clouds. It is a popular destination for hikers and nature lovers, offering a unique experience with its diverse flora and fauna.',
      duration: '1 day',
      trailClass: '1-3',
    },
    {
      id: 2,
      name: 'Mount Batulao',
      location: 'Batangas',
      difficulty: '4/9',
      distance: '5 km',
      elevationGain: 800,
      description: 'Mount Batulao is a popular hiking destination in Batangas, known for its scenic trails and panoramic views. The hike offers a mix of grassy slopes and rocky paths, making it suitable for both beginners and experienced hikers.',
      duration: '4-5 hours',
      trailClass: '1-3',
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
