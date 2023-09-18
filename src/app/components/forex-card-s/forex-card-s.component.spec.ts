import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexCardSComponent } from './forex-card-s.component';

describe('ForexCardSComponent', () => {
  let component: ForexCardSComponent;
  let fixture: ComponentFixture<ForexCardSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForexCardSComponent]
    });
    fixture = TestBed.createComponent(ForexCardSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
