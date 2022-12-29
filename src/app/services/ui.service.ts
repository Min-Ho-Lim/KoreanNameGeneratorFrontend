import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showGenerateForm: boolean = false;
  private subject = new Subject<any>();

  toggleGenerate(): void {
    console.log('toggleGenerate from service', this.showGenerateForm);
    this.showGenerateForm = !this.showGenerateForm;
    this.subject.next(this.showGenerateForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
