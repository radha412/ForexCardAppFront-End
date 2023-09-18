import { TestBed } from '@angular/core/testing';

import { ForexCardService } from './forex-card.service';

describe('ForexCardService', () => {
  let service: ForexCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
