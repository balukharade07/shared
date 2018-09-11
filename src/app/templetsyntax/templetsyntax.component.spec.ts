import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletsyntaxComponent } from './templetsyntax.component';

describe('TempletsyntaxComponent', () => {
  let component: TempletsyntaxComponent;
  let fixture: ComponentFixture<TempletsyntaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletsyntaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletsyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
