import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SequelizeNotesComponent } from './sequelize-notes.component';

describe('SequelizeNotesComponent', () => {
  let component: SequelizeNotesComponent;
  let fixture: ComponentFixture<SequelizeNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SequelizeNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SequelizeNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
