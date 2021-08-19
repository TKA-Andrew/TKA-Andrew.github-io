import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingResourcesComponent } from './coding-resources.component';

describe('CodingResourcesComponent', () => {
  let component: CodingResourcesComponent;
  let fixture: ComponentFixture<CodingResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
