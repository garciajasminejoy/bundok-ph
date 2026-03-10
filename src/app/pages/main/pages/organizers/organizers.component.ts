import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { OrganizerCardComponent } from '../../../../shared/components/organizer-card/organizer-card.component';
import { ORGANIZERS } from '../../../../services/organizers/organizers.data';
import { OrganizersService } from '../../../../services/organizers/organizers.service';

@Component({
  selector: 'app-organizers',
  imports: [
    SelectModule,
    ButtonModule,
    InputGroupModule,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule, 
    OrganizerCardComponent
  ],
  templateUrl: './organizers.component.html',
  styleUrl: './organizers.component.css',
  standalone: true,
})
export class OrganizersComponent {
  locations = [
    { name: 'Cordillera' },
    { name: 'Rizal' },
    { name: 'Batangas' },
    { name: 'Mindoro' },
    { name: 'Nueva Vizcaya' },
  ];
  selectedLocation?: string;

  organizersService = inject(OrganizersService);

  organizers = this.organizersService.getAllOrganizers();
}
