import { Component, inject } from '@angular/core';
import { ActivatedRoute, provideRouter, RouterModule } from '@angular/router';
import { hikeDetailsRoutes } from './hike-details.routes';
import { HikesService } from '../../../../services/hikes.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hike-details',
  imports: [RouterModule, TagModule, ButtonModule],
  templateUrl: './hike-details.component.html',
  styleUrl: './hike-details.component.css',
})
export class HikeDetailsComponent {
  hikeService = inject(HikesService);
  activatedRoute = inject(ActivatedRoute);

  hike = this.hikeService.getHikeById(
    Number(this.activatedRoute.snapshot.params['id']),
  );
}
