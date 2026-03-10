import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { Hike } from '../../../core/interfaces/hike.interface';

@Component({
  selector: 'app-hike-card',
  imports: [
    CardModule,
    DatePipe,
    ButtonModule,
    CurrencyPipe,
    RouterModule,
    TagModule,
  ],
  templateUrl: './hike-card.component.html',
  styleUrl: './hike-card.component.css',
})
export class HikeCardComponent {
  hike = input<Hike>();

  starRatings = computed(() => {
    const stars = this.hike()?.ratings ?? 0;
    return Array(stars).fill(0);
  });

  router = inject(Router);

  viewDetails() {
    this.router.navigate(['/hikes', this.hike()?.id]);
  }

  bookHike(): void {
    this.router.navigate(['/hikes', this.hike()?.id, 'book']);
  }
}
