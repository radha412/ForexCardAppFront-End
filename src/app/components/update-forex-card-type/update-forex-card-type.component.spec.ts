import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateForexCardTypeComponent } from './update-forex-card-type.component';

describe('UpdateForexCardTypeComponent', () => {
  let component: UpdateForexCardTypeComponent;
  let fixture: ComponentFixture<UpdateForexCardTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateForexCardTypeComponent]
    });
    fixture = TestBed.createComponent(UpdateForexCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
