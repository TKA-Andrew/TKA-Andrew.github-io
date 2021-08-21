import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmNotesComponent } from './npm-notes.component';

describe('NpmNotesComponent', () => {
  let component: NpmNotesComponent;
  let fixture: ComponentFixture<NpmNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
