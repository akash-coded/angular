import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFavoriteColorComponent } from './template-favorite-color.component';

describe('TemplateFavoriteColorComponent', () => {
  let component: TemplateFavoriteColorComponent;
  let fixture: ComponentFixture<TemplateFavoriteColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFavoriteColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFavoriteColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
