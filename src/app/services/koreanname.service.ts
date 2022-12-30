import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KoreanName } from '../../KoreanName';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KoreannameService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRandomKoreanName(): Observable<KoreanName> {
    return this.http.get<KoreanName>(this.apiUrl + '/getRandomFullName');
  }
}
