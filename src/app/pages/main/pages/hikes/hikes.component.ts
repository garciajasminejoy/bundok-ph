import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { HikeCardComponent } from '../../../../shared/components/hike-card/hike-card.component';

@Component({
  selector: 'app-hikes',
  imports: [
    SelectModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    HikeCardComponent,
  ],
  templateUrl: './hikes.component.html',
  styleUrl: './hikes.component.css',
  standalone: true,
})
export class HikesComponent {
  selectedLocation?: string;
  selectedDifficulty?: string;

  locations = [
    { name: 'Cordillera' },
    { name: 'Rizal' },
    { name: 'Batangas' },
    { name: 'Mindoro' },
    { name: 'Nueva Vizcaya' },
  ];
  difficultyLevels = [{ name: 'Easy' }, { name: 'Moderate' }, { name: 'Hard' }];
}
