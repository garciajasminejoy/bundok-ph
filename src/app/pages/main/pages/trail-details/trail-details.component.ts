import { Component, inject, OnInit } from '@angular/core';
import { TrailsService } from '../../../../services/mountains/mountains.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-trail-details',
  imports: [RouterModule],
  templateUrl: './trail-details.component.html',
  styleUrl: './trail-details.component.css',
})
export class TrailDetailsComponent implements OnInit {
  moutainsService = inject(TrailsService);

  activatedRoute = inject(ActivatedRoute);

  mountain = this.moutainsService.getTrailById(
    Number(this.activatedRoute.snapshot.params['id']),
  );

  ngOnInit(): void {
    console.log(this.mountain);
  }
}
