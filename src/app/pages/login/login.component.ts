import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    PanelModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  router = inject(Router);

  login(): void {
    this.router.navigate(['/hikes']);
  }
}
