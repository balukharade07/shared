import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F1s1Component } from './f1s1.component';

describe('F1s1Component', () => {
  let component: F1s1Component;
  let fixture: ComponentFixture<F1s1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F1s1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F1s1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
