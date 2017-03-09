import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPinComponent } from './column-pin.component';

describe('ColumnPinComponent', () => {
  let component: ColumnPinComponent;
  let fixture: ComponentFixture<ColumnPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
