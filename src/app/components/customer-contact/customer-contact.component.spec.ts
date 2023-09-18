import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactComponent } from './customer-contact.component';

describe('CustomerContactComponent', () => {
  let component: CustomerContactComponent;
  let fixture: ComponentFixture<CustomerContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerContactComponent]
    });
    fixture = TestBed.createComponent(CustomerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
