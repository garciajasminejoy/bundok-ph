import { Component, inject } from '@angular/core';
import { TrailCardComponent } from '../../../../shared/components/trail-card/trail-card.component';
import { TrailsService } from '../../../../services/mountains/mountains.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trails',
  imports: [TrailCardComponent],
  templateUrl: './mountains.component.html',
  styleUrl: './mountains.component.css',
  standalone: true
})
export class TrailsComponent {
  mountainsService = inject(TrailsService);

  mountainsSignal = this.mountainsService.getAllTrailsSignal();
}
