import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

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

  showGeneratedModal: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleModal()
      .subscribe((value) => (this.showGeneratedModal = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  toggleModal() {
    this.uiService.toggleModal();
  }
}
