import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllForexTypeComponent } from './all-forex-type.component';

describe('AllForexTypeComponent', () => {
  let component: AllForexTypeComponent;
  let fixture: ComponentFixture<AllForexTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllForexTypeComponent]
    });
    fixture = TestBed.createComponent(AllForexTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
