import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFormSliderComponent } from './generate-form-slider.component';

describe('GenerateFormSliderComponent', () => {
  let component: GenerateFormSliderComponent;
  let fixture: ComponentFixture<GenerateFormSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFormSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateFormSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
