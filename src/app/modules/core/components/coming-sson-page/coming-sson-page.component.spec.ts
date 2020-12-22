import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComingSsonPageComponent } from './coming-sson-page.component';

describe('ComingSsonPageComponent', () => {
  let component: ComingSsonPageComponent;
  let fixture: ComponentFixture<ComingSsonPageComponent>;

  beforeEach(waitForAsync(() => {
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
