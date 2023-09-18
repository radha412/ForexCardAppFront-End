import { TestBed } from '@angular/core/testing';

import { ForexPaymentServiceService } from './forex-payment-service.service';

describe('ForexPaymentServiceService', () => {
  let service: ForexPaymentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForexPaymentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
