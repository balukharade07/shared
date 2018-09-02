import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F2c2Component } from './f2c2.component';

describe('F2c2Component', () => {
  let component: F2c2Component;
  let fixture: ComponentFixture<F2c2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2c2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F2c2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
