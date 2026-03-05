import { Injectable, signal } from '@angular/core';
import { Hike } from '../../core/interfaces/hike.interface';

@Injectable({
  providedIn: 'root',
})
export class HikesService {
  hikes = signal<Hike[]>([
    {
      id: 1,
      name: 'Mount Pulag Dayhike with John Doe',
      location: 'Cordillera',
      difficulty: 'Moderate',
      description:
        'Mount Pulag is the third highest mountain in the Philippines, known for its stunning sunrise views and sea of clouds.',
      date: new Date('2024-07-15'),
      organizer: 'John Doe',
      ratings: 5,
      isSale: true,
    },
    {
      id: 2,
      name: 'Community Hike: Mount Maculot',
      location: 'Batangas',
      difficulty: 'Hard',
      description:
        'Mount Maculot is a challenging hike in Batangas, known for its rugged terrain and scenic views.',
      date: new Date('2024-07-15'),
      organizer: 'Jane Doe',
      ratings: 3,
      isSale: false,
    },
    {
      id: 3,
      name: 'Mount Banahaw: Hike for a Cause',
      location: 'Rizal',
      difficulty: 'Easy',
      description:
        'Mount Banahaw is a popular hiking destination in Rizal, known for its beautiful landscapes and spiritual significance.',
      date: new Date('2024-07-15'),
      organizer: 'Akyat PH',
      ratings: 4,
      isSale: true,
    },
  ]);

  constructor() {}

  getHikeById(id: number) {
    return this.hikes().find((hike) => hike.id === id);
  }
}
