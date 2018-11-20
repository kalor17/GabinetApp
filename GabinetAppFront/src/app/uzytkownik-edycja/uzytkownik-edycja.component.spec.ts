/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UzytkownikEdycjaComponent } from './uzytkownik-edycja.component';

describe('UzytkownikEdycjaComponent', () => {
  let component: UzytkownikEdycjaComponent;
  let fixture: ComponentFixture<UzytkownikEdycjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzytkownikEdycjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzytkownikEdycjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
