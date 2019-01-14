import { TestBed } from '@angular/core/testing';

import { SafTService } from './saf-t.service';

describe('SafTService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafTService = TestBed.get(SafTService);
    expect(service).toBeTruthy();
  });
});
