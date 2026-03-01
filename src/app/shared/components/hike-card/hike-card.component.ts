import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-hike-card',
  imports: [CardModule, DatePipe, ButtonModule, CurrencyPipe, RouterModule],
  templateUrl: './hike-card.component.html',
  styleUrl: './hike-card.component.css'
})
export class HikeCardComponent {
  hike = input<{
    id: number;
    name: string;
    description: string;
    location: string;
    date: Date;
    organizer: string;
    ratings: number;
    isSale: boolean;
  }>();

  starRatings = computed(() => {
    const stars = (this.hike()?.ratings ?? 0);
    return Array(stars).fill(0);
  });

  router = inject(Router);

  viewDetails() {
    console.log('here')
    this.router.navigate(['/hikes', this.hike()?.id]);
  }
}
