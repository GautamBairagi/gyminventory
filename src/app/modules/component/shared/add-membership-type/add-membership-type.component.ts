import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembershipService } from 'src/app/services/membership.service';


@Component({
  selector: 'app-add-membership-type',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-membership-type.component.html',
  styleUrls: ['./add-membership-type.component.scss']
})
export class AddMembershipTypeComponent implements OnInit{
  MembershipForm !: FormGroup
  Images !:File;
	constructor(
    public _activeModal: NgbActiveModal,
    private _fb : FormBuilder,
    private _Member : MembershipService
  ){}
  ngOnInit(): void {
    this.MembershipForm = this._fb.group({
      membershipName : ['',Validators.required],
      membershipCategory : ['',Validators.required],
      membershipPeriod : ['',Validators.required],
      membershipLimit : ['',Validators.required],
      membershipAmount : ['',Validators.required],
      selectClass : ['',Validators.required],
      installmentPlanAmount : ['',Validators.required], 
      installmentPlan : ['',Validators.required], 
      signupFee : ['',Validators.required], 
      membershipDescription : ['',Validators.required], 
      membershipImage : ['',Validators.required], 
    })
    
  }


  Onchange(event:any){
    this.Images = event.target.files[0]
 
  }

  OnSubmit(){
    let data : FormData = new FormData();
    data.append('membershipImage', this.Images)
    let arr = ['membershipName','membershipCategory' , 'membershipPeriod','membershipLimit' , 'membershipAmount' , 'selectClass','installmentPlanAmount' , 
    'installmentPlan' , 'signupFee' , 'membershipDescription' ,  ]
    for ( const key of arr) {
      data.append(key, this.MembershipForm.controls[key]?.value)
      }

if (this.MembershipForm.valid) {
    this._Member.add_MemberShip(data).subscribe({
      next : (res)=>{
      if (res) {
        this._activeModal.close()
      }
      },
      error : (err) => {
        console.log(err)
      },
    })
}

  }
    
  }



