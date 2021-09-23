import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlNotesComponent } from './postgresql-notes.component';

describe('PostgresqlNotesComponent', () => {
  let component: PostgresqlNotesComponent;
  let fixture: ComponentFixture<PostgresqlNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostgresqlNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgresqlNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
