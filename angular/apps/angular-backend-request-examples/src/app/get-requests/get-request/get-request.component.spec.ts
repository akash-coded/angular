import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRequestComponent } from './get-request.component';

describe('GetRequestComponent', () => {
  let component: GetRequestComponent;
  let fixture: ComponentFixture<GetRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
