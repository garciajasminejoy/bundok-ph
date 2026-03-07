import { Injectable, signal } from '@angular/core';
import { Trail } from '../../core/interfaces/mountain.interface';

@Injectable({
  providedIn: 'root',
})
export class TrailsService {
  private trails = signal<Trail[]>([
    {
      id: 1,
      name: 'Mount Pulag',
      location: 'Cordillera',
      difficulty: '3/9',
      distance: '8.5 km',
      elevation: 2500,
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
      elevation: 800,
      description: 'Mount Batulao is a popular hiking destination in Batangas, known for its scenic trails and panoramic views. The hike offers a mix of grassy slopes and rocky paths, making it suitable for both beginners and experienced hikers.',
      duration: '4-5 hours',
      trailClass: '1-3',
    },
  ]);

  constructor() {}

  getTrailById(id: number) {
    return this.trails().find((trail) => trail.id === id);
  }

  getAllTrails() {
    return this.trails();
  }

  getAllTrailsSignal() {
    return this.trails.asReadonly();
  }
}
