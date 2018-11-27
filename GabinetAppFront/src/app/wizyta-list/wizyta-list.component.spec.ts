/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WizytaListComponent } from './wizyta-list.component';

describe('WizytaListComponent', () => {
  let component: WizytaListComponent;
  let fixture: ComponentFixture<WizytaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizytaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizytaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
