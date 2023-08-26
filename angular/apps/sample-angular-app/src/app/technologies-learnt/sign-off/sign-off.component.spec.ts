import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignOffComponent } from './sign-off.component';

describe('SignOffComponent', () => {
  let component: SignOffComponent;
  let fixture: ComponentFixture<SignOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
