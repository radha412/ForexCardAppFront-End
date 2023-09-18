import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForexTypeComponent } from './add-forex-type.component';

describe('AddForexTypeComponent', () => {
  let component: AddForexTypeComponent;
  let fixture: ComponentFixture<AddForexTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddForexTypeComponent]
    });
    fixture = TestBed.createComponent(AddForexTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
