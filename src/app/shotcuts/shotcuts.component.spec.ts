import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotcutsComponent } from './shotcuts.component';

describe('ShotcutsComponent', () => {
  let component: ShotcutsComponent;
  let fixture: ComponentFixture<ShotcutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShotcutsComponent]
    });
    fixture = TestBed.createComponent(ShotcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
