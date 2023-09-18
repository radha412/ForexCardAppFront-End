import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTransactionServiceComponent } from './payment-transaction-service.component';

describe('PaymentTransactionServiceComponent', () => {
  let component: PaymentTransactionServiceComponent;
  let fixture: ComponentFixture<PaymentTransactionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTransactionServiceComponent]
    });
    fixture = TestBed.createComponent(PaymentTransactionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
