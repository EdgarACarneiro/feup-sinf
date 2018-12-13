import { TestBed } from '@angular/core/testing';

import { TimeFrameService } from './time-frame.service';

describe('TimeFrameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeFrameService = TestBed.get(TimeFrameService);
    expect(service).toBeTruthy();
  });
});
