import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { KoreannameService } from 'src/app/services/koreanname.service';
import { UiService } from 'src/app/services/ui.service';
import { KoreanName } from 'src/KoreanName';

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
  isLoading: boolean = false;

  koreanName: KoreanName = {} as KoreanName;

  showGeneratedModal: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private koreanameService: KoreannameService
  ) {
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
    this.isLoading = true;
    // if  this.getRandomKoreanName() is done, then toggleModal
    this.getRandomKoreanName();
  }

  getRandomKoreanName() {
    this.koreanameService.getRandomKoreanName().subscribe((koreanName) => {
      this.koreanName = koreanName;
      this.isLoading = false;
      this.uiService.toggleModal();
    });
  }
}
