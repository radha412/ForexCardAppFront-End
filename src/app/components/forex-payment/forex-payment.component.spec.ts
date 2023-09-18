import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexPaymentComponent } from './forex-payment.component';

describe('ForexPaymentComponent', () => {
  let component: ForexPaymentComponent;
  let fixture: ComponentFixture<ForexPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexPaymentComponent]
    });
    fixture = TestBed.createComponent(ForexPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
