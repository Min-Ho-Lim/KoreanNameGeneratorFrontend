import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KoreanName } from '../../KoreanName';

@Injectable({
  providedIn: 'root',
})
export class KoreannameService {
  private apiUrl = 'http://localhost:3000/api/getRandomFullName';

  constructor(private http: HttpClient) {}

  getRandomKoreanName(): Observable<KoreanName> {
    return this.http.get<KoreanName>(this.apiUrl);
  }
}
