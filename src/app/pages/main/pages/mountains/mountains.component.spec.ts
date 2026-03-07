import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsComponent } from './mountains.component';

describe('MountainsComponent', () => {
  let component: TrailsComponent;
  let fixture: ComponentFixture<TrailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
