import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTranscationsComponent } from './payment-transcations.component';

describe('PaymentTranscationsComponent', () => {
  let component: PaymentTranscationsComponent;
  let fixture: ComponentFixture<PaymentTranscationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTranscationsComponent]
    });
    fixture = TestBed.createComponent(PaymentTranscationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
