/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RezerwacjeUserComponent } from './rezerwacje-user.component';

describe('RezerwacjeUserComponent', () => {
  let component: RezerwacjeUserComponent;
  let fixture: ComponentFixture<RezerwacjeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezerwacjeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
