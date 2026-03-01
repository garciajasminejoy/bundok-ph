import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeReviewsComponent } from './hike-reviews.component';

describe('HikeReviewsComponent', () => {
  let component: HikeReviewsComponent;
  let fixture: ComponentFixture<HikeReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
