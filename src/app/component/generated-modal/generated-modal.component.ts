import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoreannameService } from 'src/app/services/koreanname.service';
import { UiService } from 'src/app/services/ui.service';
import { KoreanName } from 'src/KoreanName';

@Component({
  selector: 'app-generated-modal',
  templateUrl: './generated-modal.component.html',
  styleUrls: ['./generated-modal.component.scss'],
})
export class GeneratedModalComponent {
  @Input() showGeneratedModal: boolean = false;
  @Input() koreanName: KoreanName = {} as KoreanName;

  isLoading: boolean = false;

  constructor(
    private uiService: UiService,
    private koreanameService: KoreannameService
  ) {}

  titleCase(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  getKoreanFullName() {
    if (!this.koreanName.firstName || !this.koreanName.lastName) return '';

    const { firstName, lastName } = this.koreanName;

    const firstNameObj = firstName[0];
    const lastNameObj = lastName[0];

    return `${lastNameObj.LastName}${firstNameObj.FirstName}`;
  }

  getRomanizedFullName() {
    if (!this.koreanName.firstName || !this.koreanName.lastName) return '';

    const { firstName, lastName } = this.koreanName;
    console.log(firstName, lastName);
    const firstNameObj = firstName[0];
    const lastNameObj = lastName[0];

    return `${this.titleCase(firstNameObj.R_FirstName)} ${this.titleCase(
      lastNameObj.R_LastName
    )}`;
  }

  getRandomKoreanName() {
    this.isLoading = true;
    // give 300ms to show loading animation
    setTimeout(() => {
      this.koreanameService.getRandomKoreanName().subscribe((koreanName) => {
        this.koreanName = koreanName;
        this.isLoading = false;
      });
    }, 300);
  }

  onClose() {
    this.uiService.toggleModal();
  }
}
