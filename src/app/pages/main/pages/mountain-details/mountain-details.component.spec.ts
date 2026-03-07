import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailDetailsComponent } from './mountain-details.component';

describe('MountainDetailsComponent', () => {
  let component: TrailDetailsComponent;
  let fixture: ComponentFixture<TrailDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
