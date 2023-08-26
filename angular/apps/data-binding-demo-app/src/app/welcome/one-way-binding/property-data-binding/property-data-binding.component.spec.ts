import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDataBindingComponent } from './property-data-binding.component';

describe('PropertyDataBindingComponent', () => {
  let component: PropertyDataBindingComponent;
  let fixture: ComponentFixture<PropertyDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
