import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastbarComponent } from './lastbar.component';

describe('LastbarComponent', () => {
  let component: LastbarComponent;
  let fixture: ComponentFixture<LastbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastbarComponent]
    });
    fixture = TestBed.createComponent(LastbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
