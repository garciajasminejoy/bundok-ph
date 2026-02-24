import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HikesComponent } from './pages/hikes/hikes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'hikes',
        component: HikesComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
