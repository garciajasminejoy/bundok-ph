import { Injectable, signal } from '@angular/core';
import { Hike } from '../../core/interfaces/hike.interface';
import { HIKES } from './hikes.data';

@Injectable({
  providedIn: 'root',
})
export class HikesService {
  hikes = signal<Hike[]>(HIKES);

  constructor() {}

  getHikeById(id: number) {
    return this.hikes().find((hike) => hike.id === id);
  }
}
