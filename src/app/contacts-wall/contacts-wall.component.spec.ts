import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsWallComponent } from './contacts-wall.component';

describe('ContactsWallComponent', () => {
  let component: ContactsWallComponent;
  let fixture: ComponentFixture<ContactsWallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsWallComponent]
    });
    fixture = TestBed.createComponent(ContactsWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
