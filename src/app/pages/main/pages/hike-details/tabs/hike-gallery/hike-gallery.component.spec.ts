import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeGalleryComponent } from './hike-gallery.component';

describe('HikeGalleryComponent', () => {
  let component: HikeGalleryComponent;
  let fixture: ComponentFixture<HikeGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HikeGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HikeGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
