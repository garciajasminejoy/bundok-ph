import { Component } from '@angular/core';
import { MountainCardComponent } from '../../../../shared/components/mountain-card/mountain-card.component';

@Component({
  selector: 'app-mountains',
  imports: [MountainCardComponent],
  templateUrl: './mountains.component.html',
  styleUrl: './mountains.component.css',
  standalone: true
})
export class MountainsComponent {

}
