import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCardFormComponent } from './forex-card-form.component';

describe('ForexCardFormComponent', () => {
  let component: ForexCardFormComponent;
  let fixture: ComponentFixture<ForexCardFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexCardFormComponent]
    });
    fixture = TestBed.createComponent(ForexCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
