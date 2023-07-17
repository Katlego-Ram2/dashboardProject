import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayNotiComponent } from './birthday-noti.component';

describe('BirthdayNotiComponent', () => {
  let component: BirthdayNotiComponent;
  let fixture: ComponentFixture<BirthdayNotiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdayNotiComponent]
    });
    fixture = TestBed.createComponent(BirthdayNotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
