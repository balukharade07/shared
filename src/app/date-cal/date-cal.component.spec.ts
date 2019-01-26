import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateCalComponent } from './date-cal.component';

describe('DateCalComponent', () => {
  let component: DateCalComponent;
  let fixture: ComponentFixture<DateCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
