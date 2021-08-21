import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevelopmentGeneralComponent } from './web-development-general.component';

describe('WebDevelopmentGeneralComponent', () => {
  let component: WebDevelopmentGeneralComponent;
  let fixture: ComponentFixture<WebDevelopmentGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevelopmentGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDevelopmentGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
