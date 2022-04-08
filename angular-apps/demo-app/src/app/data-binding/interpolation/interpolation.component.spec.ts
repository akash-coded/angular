import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComponent } from './interpolation.component';

describe('InterpolationComponent', () => {
  let component: InterpolationComponent;
  let fixture: ComponentFixture<InterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
