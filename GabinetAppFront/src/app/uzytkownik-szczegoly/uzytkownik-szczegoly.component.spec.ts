/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UzytkownikSzczegolyComponent } from './uzytkownik-szczegoly.component';

describe('UzytkownikSzczegolyComponent', () => {
  let component: UzytkownikSzczegolyComponent;
  let fixture: ComponentFixture<UzytkownikSzczegolyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzytkownikSzczegolyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzytkownikSzczegolyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
