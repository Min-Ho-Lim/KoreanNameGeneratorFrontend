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

  constructor(
    private uiService: UiService,
    private koreanameService: KoreannameService
  ) {}

  getKoreanFullName() {
    if (this.koreanName?.firstName && this.koreanName?.lastName) {
      return `${this.koreanName.lastName.LastName}${this.koreanName.firstName.FirstName}`;
    }
    return '';
  }

  getRomanizedFullName() {
    if (this.koreanName?.firstName && this.koreanName?.lastName) {
      return `${this.koreanName.firstName.R_FirstName} ${this.koreanName.lastName.R_LastName}`;
    }
    return '';
  }

  getRandomKoreanName() {
    this.koreanameService.getRandomKoreanName().subscribe((koreanName) => {
      this.koreanName = koreanName;
    });
  }
}
