import { Injectable, signal } from '@angular/core';
import { Trail } from '../../core/interfaces/trail.interface';
import { Organizer } from '../../core/interfaces/organizer.interface';
import { ORGANIZERS } from './organizers.data';

@Injectable({
  providedIn: 'root'
})
export class OrganizersService {
  private organizers = signal<Organizer[]>(ORGANIZERS);

  constructor() { }
}
