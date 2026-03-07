import { Component, inject } from '@angular/core';
import { TrailCardComponent } from '../../../../shared/components/trail-card/trail-card.component';
import { TrailsService } from '../../../../services/trails/trails.service';

@Component({
  selector: 'app-trails',
  imports: [TrailCardComponent],
  templateUrl: './trails.component.html',
  styleUrl: './trails.component.css',
  standalone: true
})
export class TrailsComponent {
  trailsService = inject(TrailsService);

  trailsSignal = this.trailsService.getAllTrailsSignal();
}
