import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeDetailsComponent } from './hike-details.component';

describe('HikeDetailsComponent', () => {
  let component: HikeDetailsComponent;
  let fixture: ComponentFixture<HikeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
