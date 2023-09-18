import { TestBed } from '@angular/core/testing';

import { PaymentTransactionServiceService } from './payment-transaction-service.service';

describe('PaymentTransactionServiceService', () => {
  let service: PaymentTransactionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentTransactionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
