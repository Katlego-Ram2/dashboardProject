import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayWallComponent } from './birthday-wall.component';

describe('BirthdayWallComponent', () => {
  let component: BirthdayWallComponent;
  let fixture: ComponentFixture<BirthdayWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayWallComponent]
    });
    fixture = TestBed.createComponent(BirthdayWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
