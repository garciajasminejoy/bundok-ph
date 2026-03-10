import { Injectable, signal } from '@angular/core';
import { Trail } from '../../core/interfaces/trail.interface';
import { TRAILS } from './trails.data';

@Injectable({
  providedIn: 'root',
})
export class TrailsService {
  private trails = signal<Trail[]>(TRAILS);

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
