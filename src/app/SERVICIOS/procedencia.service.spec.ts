import { TestBed } from '@angular/core/testing';

import { PROCEDENCIAService } from './procedencia.service';

describe('PROCEDENCIAService', () => {
  let service: PROCEDENCIAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PROCEDENCIAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
