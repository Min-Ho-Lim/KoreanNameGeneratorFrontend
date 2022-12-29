import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  private showGenerateForm: boolean = false;

  toggleAddTask(): void {
    this.showGenerateForm = !this.showGenerateForm;
  }
}
