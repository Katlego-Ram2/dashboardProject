import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorWallComponent } from './sponsor-wall.component';

describe('SponsorWallComponent', () => {
  let component: SponsorWallComponent;
  let fixture: ComponentFixture<SponsorWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SponsorWallComponent]
    });
    fixture = TestBed.createComponent(SponsorWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
