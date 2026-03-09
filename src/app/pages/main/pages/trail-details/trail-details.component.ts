import { Component, inject, OnInit } from '@angular/core';
import { TrailsService } from '../../../../services/trails/trails.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TestimonialCardComponent } from '../../../../shared/components/testimonial-card/testimonial-card.component';
import { HikeCardComponent } from '../../../../shared/components/hike-card/hike-card.component';
import { HikesService } from '../../../../services/hikes/hikes.service';

@Component({
  selector: 'app-trail-details',
  imports: [RouterModule, TestimonialCardComponent, HikeCardComponent],
  templateUrl: './trail-details.component.html',
  styleUrl: './trail-details.component.css',
})
export class TrailDetailsComponent implements OnInit {
  trailsService = inject(TrailsService);
  hikesService = inject(HikesService);

  activatedRoute = inject(ActivatedRoute);

  trail = this.trailsService.getTrailById(
    Number(this.activatedRoute.snapshot.params['id']),
  );

  hikes = this.hikesService
    .hikes()
    .filter((hike) => hike.trailId === this.trail?.id);

  ngOnInit(): void {}
}
