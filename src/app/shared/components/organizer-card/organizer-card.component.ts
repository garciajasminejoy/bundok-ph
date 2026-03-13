import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Organizer } from '../../../core/interfaces/organizer.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organizer-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './organizer-card.component.html',
  styleUrl: './organizer-card.component.css',
})
export class OrganizerCardComponent {
  organizer = input<Organizer>();

  router = inject(Router);

  viewOrganizer(): void {
    const organizer = this.organizer();
    if (organizer) {
      this.router.navigate(['/organizers', organizer.id]);
    }
  }
}
