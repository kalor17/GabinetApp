/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RezerwacjeComponent } from './rezerwacje.component';

describe('RezerwacjeComponent', () => {
  let component: RezerwacjeComponent;
  let fixture: ComponentFixture<RezerwacjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezerwacjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezerwacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
