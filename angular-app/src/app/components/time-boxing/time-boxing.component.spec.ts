import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBoxingComponent } from './time-boxing.component';

describe('TimeBoxingComponent', () => {
  let component: TimeBoxingComponent;
  let fixture: ComponentFixture<TimeBoxingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeBoxingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBoxingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
