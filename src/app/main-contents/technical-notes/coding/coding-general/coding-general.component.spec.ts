import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingGeneralComponent } from './coding-general.component';

describe('CodingGeneralComponent', () => {
  let component: CodingGeneralComponent;
  let fixture: ComponentFixture<CodingGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
