import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-mountain-card',
  imports: [CardModule, TagModule, ButtonModule],
  templateUrl: './mountain-card.component.html',
  styleUrl: './mountain-card.component.css'
})
export class MountainCardComponent {


  viewDetails(): void {}
}
