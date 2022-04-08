import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayBindingComponent } from './one-way-binding.component';

describe('OneWayBindingComponent', () => {
  let component: OneWayBindingComponent;
  let fixture: ComponentFixture<OneWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWayBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
