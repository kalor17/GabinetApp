/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PasekComponent } from './pasek.component';

describe('PasekComponent', () => {
  let component: PasekComponent;
  let fixture: ComponentFixture<PasekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
