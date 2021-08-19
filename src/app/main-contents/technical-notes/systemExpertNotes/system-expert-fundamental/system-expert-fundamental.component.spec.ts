import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExpertFundamentalComponent } from './system-expert-fundamental.component';

describe('SystemExpertFundamentalComponent', () => {
  let component: SystemExpertFundamentalComponent;
  let fixture: ComponentFixture<SystemExpertFundamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemExpertFundamentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemExpertFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
