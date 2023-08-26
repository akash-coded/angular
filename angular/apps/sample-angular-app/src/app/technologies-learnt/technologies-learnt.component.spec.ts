import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesLearntComponent } from './technologies-learnt.component';

describe('TechnologiesLearntComponent', () => {
  let component: TechnologiesLearntComponent;
  let fixture: ComponentFixture<TechnologiesLearntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologiesLearntComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologiesLearntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
