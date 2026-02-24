import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-hikes',
  imports: [SelectModule, FormsModule],
  templateUrl: './hikes.component.html',
  styleUrl: './hikes.component.css',
  standalone: true
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
  difficultyLevels = [
    { name: 'Easy' },
    { name: 'Moderate' },
    { name: 'Hard' },
  ];
}
