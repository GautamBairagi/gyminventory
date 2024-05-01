import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-register-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-register-payment.component.html',
  styleUrls: ['./add-register-payment.component.scss']
})
export class AddRegisterPaymentComponent {

  registerPayments  !: FormGroup;
  ckDep: boolean = false;

  constructor(
    private fb:FormBuilder
      ){
        this.registerPayments = this.fb.group({
          MemberName: ['' ,Validators.required],
          MembershipID: ['' ,Validators.required],
          PaymentAmount: ['',Validators.required],
          PaymentMethod: ['',Validators.required],
          
        })
    }

}
