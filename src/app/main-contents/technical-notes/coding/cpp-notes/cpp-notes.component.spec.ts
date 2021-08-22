import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CppNotesComponent } from './cpp-notes.component';

describe('CppNotesComponent', () => {
  let component: CppNotesComponent;
  let fixture: ComponentFixture<CppNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CppNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CppNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
