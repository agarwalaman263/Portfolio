import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomeComponent } from './portfolio-home.component';

describe('PortfolioHomeComponent', () => {
  let component: PortfolioHomeComponent;
  let fixture: ComponentFixture<PortfolioHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
