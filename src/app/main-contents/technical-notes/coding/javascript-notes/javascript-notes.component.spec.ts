import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptNotesComponent } from './javascript-notes.component';

describe('JavascriptNotesComponent', () => {
  let component: JavascriptNotesComponent;
  let fixture: ComponentFixture<JavascriptNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
