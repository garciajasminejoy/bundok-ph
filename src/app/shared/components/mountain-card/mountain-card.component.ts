import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Mountain } from '../../../core/interfaces/mountain.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mountain-card',
  imports: [CardModule, TagModule, ButtonModule],
  templateUrl: './mountain-card.component.html',
  styleUrl: './mountain-card.component.css'
})
export class MountainCardComponent {
  mountain = input<Mountain>();

  router = inject(Router);

  toMountainDetailPage(): void {
    this.router.navigate(['/mountains', this.mountain()?.id]);
  }
}
