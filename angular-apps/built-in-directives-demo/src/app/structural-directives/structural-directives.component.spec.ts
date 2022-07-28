import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesComponent } from './structural-directives.component';

describe('StructuralDirectivesComponent', () => {
  let component: StructuralDirectivesComponent;
  let fixture: ComponentFixture<StructuralDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
