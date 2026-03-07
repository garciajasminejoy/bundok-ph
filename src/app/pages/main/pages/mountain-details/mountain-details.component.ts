import { Component, inject, OnInit } from '@angular/core';
import { MountainsService } from '../../../../services/mountains/mountains.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-mountain-details',
  imports: [RouterModule],
  templateUrl: './mountain-details.component.html',
  styleUrl: './mountain-details.component.css',
})
export class TrailDetailsComponent implements OnInit {
  moutainsService = inject(MountainsService);

  activatedRoute = inject(ActivatedRoute);

  mountain = this.moutainsService.getMountainById(
    Number(this.activatedRoute.snapshot.params['id']),
  );

  ngOnInit(): void {
    console.log(this.mountain);
  }
}
