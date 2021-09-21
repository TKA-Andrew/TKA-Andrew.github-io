import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppNotesPart2Component } from './cpp-notes-part2.component';

describe('CppNotesPart2Component', () => {
  let component: CppNotesPart2Component;
  let fixture: ComponentFixture<CppNotesPart2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppNotesPart2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppNotesPart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
