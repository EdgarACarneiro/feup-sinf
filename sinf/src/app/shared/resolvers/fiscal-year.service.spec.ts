import { TestBed } from '@angular/core/testing';

import { FiscalYearService } from './fiscal-year.service';

describe('FiscalYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiscalYearService = TestBed.get(FiscalYearService);
    expect(service).toBeTruthy();
  });
});
