import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent {
  addMember !: FormGroup;
  ckDep: boolean = false
  constructor(private fb:FormBuilder,
    public _activeModal: NgbActiveModal,){
    this.addMember = this.fb.group({
      memberId: ['' ,Validators.required],
      firstName: ['',Validators.required],
      middleName: ['',Validators.required],
      lastName: ['',Validators.required],
      gender: ['',Validators.required],
      dob: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zipcode: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.required,],
      weight: ['',Validators.required],
      height: ['',Validators.required],
      chest: ['',Validators.required],
      waist: ['',Validators.required],
      thigh: ['',Validators.required],
      arms: ['',Validators.required],
      fat: ['',Validators.required],
      userName: ['',Validators.required],
      password: ['',Validators.required],
      image: ['',Validators.required],
      memberShip: ['',Validators.required],
      memberShipfrom: ['',Validators.required],
      memberShipto: ['',Validators.required],

    })
  }
  addMembers() {
    if (this.addMember.invalid) {
      this.ckDep = true;
      return
  } else {
    this._activeModal.close()
    }
  }
	open(content: TemplateRef<any>) {
	}
}
