import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrganizersComponent } from './pages/main/pages/organizers/organizers.component';
import { MountainsComponent } from './pages/main/pages/mountains/mountains.component';
import { MainComponent } from './pages/main/main.component';
import { HikesComponent } from './pages/main/pages/hikes/hikes.component';
import { HikeDetailsComponent } from './pages/main/pages/hike-details/hike-details.component';
import { HikeGeneralDetailsComponent } from './pages/main/pages/hike-details/tabs/hike-general-details/hike-general-details.component';
import { HikeTrailInfoComponent } from './pages/main/pages/hike-details/tabs/hike-trail-info/hike-trail-info.component';
import { HikeGalleryComponent } from './pages/main/pages/hike-details/tabs/hike-gallery/hike-gallery.component';
import { HikeReviewsComponent } from './pages/main/pages/hike-details/tabs/hike-reviews/hike-reviews.component';

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
            component: HikeGeneralDetailsComponent
          },
          {
            path: 'trail',
            component: HikeTrailInfoComponent
          },
          {
            path: 'gallery',
            component: HikeGalleryComponent
          },
          {
            path: 'reviews',
            component: HikeReviewsComponent
          }
        ]
      },
      {
        path: 'hikes',
        component: HikesComponent,
      },
      {
        path: 'mountains',
        component: MountainsComponent,
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
