import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitlabNotesComponent } from './gitlab-notes.component';

describe('GitlabNotesComponent', () => {
  let component: GitlabNotesComponent;
  let fixture: ComponentFixture<GitlabNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitlabNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitlabNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
