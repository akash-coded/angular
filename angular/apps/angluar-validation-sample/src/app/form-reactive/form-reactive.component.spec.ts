import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveComponent } from './form-reactive.component';

describe('FormReactiveComponent', () => {
  let component: FormReactiveComponent;
  let fixture: ComponentFixture<FormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
