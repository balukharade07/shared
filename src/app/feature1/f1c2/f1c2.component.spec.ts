import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1c2Component } from './f1c2.component';

describe('F1c2Component', () => {
  let component: F1c2Component;
  let fixture: ComponentFixture<F1c2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1c2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
