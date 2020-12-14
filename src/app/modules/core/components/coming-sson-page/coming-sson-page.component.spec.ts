import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSsonPageComponent } from './coming-sson-page.component';

describe('ComingSsonPageComponent', () => {
  let component: ComingSsonPageComponent;
  let fixture: ComponentFixture<ComingSsonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComingSsonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComingSsonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
