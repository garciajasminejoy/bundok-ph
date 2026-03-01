import { Component } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { hikeDetailsRoutes } from './hike-details.routes';

@Component({
  selector: 'app-hike-details',
  imports: [RouterModule],
  templateUrl: './hike-details.component.html',
  styleUrl: './hike-details.component.css',
})
export class HikeDetailsComponent {}
