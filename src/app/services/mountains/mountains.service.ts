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
      description: 'Mount Pulag is the third highest mountain in the Philippines, known for its stunning sunrise views and sea of clouds. It is a popular destination for hikers and nature lovers, offering a unique experience with its diverse flora and fauna.',
    },
    {
      id: 2,
      name: 'Mount Batulao',
      location: 'Batangas',
      difficulty: 'Moderate',
      distance: '5 km',
      elevationGain: 800,
      description: 'Mount Batulao is a popular hiking destination in Batangas, known for its scenic trails and panoramic views. The hike offers a mix of grassy slopes and rocky paths, making it suitable for both beginners and experienced hikers.',
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
