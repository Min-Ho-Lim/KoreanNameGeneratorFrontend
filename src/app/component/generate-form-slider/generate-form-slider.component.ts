import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generate-form-slider',
  templateUrl: './generate-form-slider.component.html',
  styleUrls: ['./generate-form-slider.component.scss'],
})
export class GenerateFormSliderComponent {
  @Input() rangeValues: number[] = [0, 100];
  @Input() maxValue: number = 1000;
}
