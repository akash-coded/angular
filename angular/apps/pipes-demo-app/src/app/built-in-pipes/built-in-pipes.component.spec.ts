import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesComponent } from './built-in-pipes.component';

describe('BuiltInPipesComponent', () => {
  let component: BuiltInPipesComponent;
  let fixture: ComponentFixture<BuiltInPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
