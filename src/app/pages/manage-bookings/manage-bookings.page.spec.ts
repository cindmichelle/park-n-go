import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBookingsPage } from './manage-bookings.page';

describe('ManageBookingsPage', () => {
  let component: ManageBookingsPage;
  let fixture: ComponentFixture<ManageBookingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBookingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
