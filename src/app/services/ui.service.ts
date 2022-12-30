import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showGenerateForm: boolean = false;
  private showGeneratedModal: boolean = false;
  private subject = new Subject<any>();
  private subjectModal = new Subject<any>();

  toggleGenerate(): void {
    this.showGenerateForm = !this.showGenerateForm;
    this.subject.next(this.showGenerateForm);
  }

  toggleModal(): void {
    this.showGeneratedModal = !this.showGeneratedModal;
    this.subjectModal.next(this.showGeneratedModal);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

  onToggleModal(): Observable<any> {
    return this.subjectModal.asObservable();
  }
}
