import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTaskEditorComponent } from './daily-task-editor.component';

describe('DailyTaskEditorComponent', () => {
  let component: DailyTaskEditorComponent;
  let fixture: ComponentFixture<DailyTaskEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTaskEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTaskEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
