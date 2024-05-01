import { TestBed } from '@angular/core/testing';

import { TosterSerService } from './toster-ser.service';

describe('TosterSerService', () => {
  let service: TosterSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TosterSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
