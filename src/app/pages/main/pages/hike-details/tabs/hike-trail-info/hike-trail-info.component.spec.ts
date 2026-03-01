import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeTrailInfoComponent } from './hike-trail-info.component';

describe('HikeTrailInfoComponent', () => {
  let component: HikeTrailInfoComponent;
  let fixture: ComponentFixture<HikeTrailInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeTrailInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeTrailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
