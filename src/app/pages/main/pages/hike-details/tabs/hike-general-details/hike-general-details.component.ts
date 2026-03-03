import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';


@Component({
  selector: 'app-hike-general-details',
  imports: [PanelModule, TableModule],
  templateUrl: './hike-general-details.component.html',
  styleUrl: './hike-general-details.component.css'
})
export class HikeGeneralDetailsComponent {
  dateNow = new Date();
}
