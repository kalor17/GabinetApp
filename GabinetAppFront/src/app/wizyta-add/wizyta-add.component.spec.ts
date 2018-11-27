/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WizytaAddComponent } from './wizyta-add.component';

describe('WizytaAddComponent', () => {
  let component: WizytaAddComponent;
  let fixture: ComponentFixture<WizytaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizytaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizytaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
