import { TestBed } from '@angular/core/testing';

import { KoreannameService } from './koreanname.service';

describe('KoreannameService', () => {
  let service: KoreannameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoreannameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
