import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeCardComponent } from './hike-card.component';

describe('HikeCardComponent', () => {
  let component: HikeCardComponent;
  let fixture: ComponentFixture<HikeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
