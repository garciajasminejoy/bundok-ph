import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { OrganizersComponent } from './pages/main/pages/organizers/organizers.component';
import { MountainsComponent } from './pages/main/pages/mountains/mountains.component';
import { MainComponent } from './pages/main/main.component';
import { HikesComponent } from './pages/main/pages/hikes/hikes.component';
import { HikeDetailsComponent } from './pages/main/pages/hike-details/hike-details.component';

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
