import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrganizersComponent } from './pages/main/pages/organizers/organizers.component';
import { TrailsComponent } from './pages/main/pages/trails/trails.component';
import { MainComponent } from './pages/main/main.component';
import { HikesComponent } from './pages/main/pages/hikes/hikes.component';
import { HikeDetailsComponent } from './pages/main/pages/hike-details/hike-details.component';
import { HikeGeneralDetailsComponent } from './pages/main/pages/hike-details/tabs/hike-general-details/hike-general-details.component';
import { HikeTrailInfoComponent } from './pages/main/pages/hike-details/tabs/hike-trail-info/hike-trail-info.component';
import { HikeGalleryComponent } from './pages/main/pages/hike-details/tabs/hike-gallery/hike-gallery.component';
import { HikeReviewsComponent } from './pages/main/pages/hike-details/tabs/hike-reviews/hike-reviews.component';
import { TrailDetailsComponent } from './pages/main/pages/trail-details/trail-details.component';
import { BookingComponent } from './pages/main/pages/booking/booking.component';
import { OrganizerDetailsComponent } from './pages/main/pages/organizer-details/organizer-details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'hikes',
        pathMatch: 'full',
      },
      {
        path: 'hikes/:id',
        component: HikeDetailsComponent,
        children: [
          {
            path: '',
            redirectTo: 'general',
            pathMatch: 'full',
          },
          {
            path: 'general',
            component: HikeGeneralDetailsComponent,
          },
          {
            path: 'trail',
            component: HikeTrailInfoComponent,
          },
          {
            path: 'gallery',
            component: HikeGalleryComponent,
          },
          {
            path: 'reviews',
            component: HikeReviewsComponent,
          },
        ],
      },
      {
        path: 'hikes/:hikeId/book',
        component: BookingComponent,
      },
      {
        path: 'hikes',
        component: HikesComponent,
      },
      {
        path: 'trails/:id',
        component: TrailDetailsComponent,
      },
      {
        path: 'trails',
        component: TrailsComponent,
      },
      {
        path: 'organizers/:id',
        component: OrganizerDetailsComponent,
      },
      {
        path: 'organizers',
        component: OrganizersComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
