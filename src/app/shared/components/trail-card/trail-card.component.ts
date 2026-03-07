import { Component, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Mountain } from '../../../core/interfaces/mountain.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trail-card',
  imports: [CardModule, TagModule, ButtonModule],
  templateUrl: './trail-card.component.html',
  styleUrl: './trail-card.component.css'
})
export class TrailCardComponent {
  trail = input<Mountain>();

  router = inject(Router);

  toTrailDetailPage(): void {
    this.router.navigate(['/trails', this.trail()?.id]);
  }
}
