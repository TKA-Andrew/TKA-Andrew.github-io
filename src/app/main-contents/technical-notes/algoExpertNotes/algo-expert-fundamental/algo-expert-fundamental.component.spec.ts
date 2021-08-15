import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgoExpertFundamentalComponent } from './algo-expert-fundamental.component';

describe('AlgoExpertFundamentalComponent', () => {
  let component: AlgoExpertFundamentalComponent;
  let fixture: ComponentFixture<AlgoExpertFundamentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgoExpertFundamentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgoExpertFundamentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
