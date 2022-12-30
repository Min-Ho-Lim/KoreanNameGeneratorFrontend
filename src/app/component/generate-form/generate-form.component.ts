import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-form',
  templateUrl: './generate-form.component.html',
  styleUrls: ['./generate-form.component.scss'],
})
export class GenerateFormComponent {
  isMasculline: boolean = true;
  isFeminine: boolean = true;
  isNeuter: boolean = true;
  rangeValues: number[] = [0, 100];
}
