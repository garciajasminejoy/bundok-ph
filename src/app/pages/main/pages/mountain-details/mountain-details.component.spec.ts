import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainDetailsComponent } from './mountain-details.component';

describe('MountainDetailsComponent', () => {
  let component: MountainDetailsComponent;
  let fixture: ComponentFixture<MountainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountainDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
