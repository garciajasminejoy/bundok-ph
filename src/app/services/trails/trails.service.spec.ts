import { TestBed } from '@angular/core/testing';

import { TrailsService } from './trails.service';

describe('MountainsService', () => {
  let service: TrailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
