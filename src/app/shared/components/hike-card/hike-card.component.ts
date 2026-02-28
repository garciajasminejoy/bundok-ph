import { DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-hike-card',
  imports: [CardModule, DatePipe],
  templateUrl: './hike-card.component.html',
  styleUrl: './hike-card.component.css'
})
export class HikeCardComponent {
  hike = input<{
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
}
