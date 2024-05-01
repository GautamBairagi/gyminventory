import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegisterPaymentComponent } from './add-register-payment.component';

describe('AddRegisterPaymentComponent', () => {
  let component: AddRegisterPaymentComponent;
  let fixture: ComponentFixture<AddRegisterPaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddRegisterPaymentComponent]
    });
    fixture = TestBed.createComponent(AddRegisterPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



