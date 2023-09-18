import { TestBed } from '@angular/core/testing';

import { ForexCardServiceService } from './forex-card-service.service';

describe('ForexCardServiceService', () => {
  let service: ForexCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
