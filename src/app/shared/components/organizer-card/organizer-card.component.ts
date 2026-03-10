import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Organizer } from '../../../core/interfaces/organizer.interface';

@Component({
  selector: 'app-organizer-card',
  imports: [CardModule, ButtonModule],
  templateUrl: './organizer-card.component.html',
  styleUrl: './organizer-card.component.css',
})
export class OrganizerCardComponent {
  organizer = input<Organizer>()

  viewOrganizer(): void {}
}
