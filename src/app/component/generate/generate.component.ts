import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1, height: '100%' })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0, height: '0%' })),
      ]),
    ]),
  ],
  styleUrls: ['./generate.component.scss'],
})
export class GenerateComponent {
  showGenerateForm: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showGenerateForm = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleGenerate() {
    this.uiService.toggleGenerate();
  }
}
