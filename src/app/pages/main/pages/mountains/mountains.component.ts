import { Component, inject } from '@angular/core';
import { MountainCardComponent } from '../../../../shared/components/mountain-card/mountain-card.component';
import { MountainsService } from '../../../../services/mountains/mountains.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountains',
  imports: [MountainCardComponent],
  templateUrl: './mountains.component.html',
  styleUrl: './mountains.component.css',
  standalone: true
})
export class TrailsComponent {
  mountainsService = inject(MountainsService);

  mountainsSignal = this.mountainsService.getAllMountainsSignal();
}
