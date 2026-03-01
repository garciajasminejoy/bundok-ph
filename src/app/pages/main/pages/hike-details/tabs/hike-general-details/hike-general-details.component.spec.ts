import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeGeneralDetailsComponent } from './hike-general-details.component';

describe('HikeGeneralDetailsComponent', () => {
  let component: HikeGeneralDetailsComponent;
  let fixture: ComponentFixture<HikeGeneralDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeGeneralDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeGeneralDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
