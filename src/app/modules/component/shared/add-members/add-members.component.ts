import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { MembershipService } from 'src/app/services/membership.service';

@Component({
  selector: 'app-add-members',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.scss']
})
export class AddMembersComponent implements OnInit  {
  addMember !: FormGroup;
  ckDep: boolean = false;
  url : any;
  images!:File
  member=false;
  memberId:any
  constructor(private fb:FormBuilder,private service:MembershipService,private route: ActivatedRoute,private router:Router){
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

  ngOnInit() {
    this.route.queryParams.subscribe(member => {
        console.log(member); 
      }
    );
   
  }

  onSelectFile(event) {
     this.images= event.target.files[0]
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
        this.addMember.value.image=this.url
      }
    }
  }

  addMembers() {
    if (this.addMember.invalid) {
      this.ckDep = true;
      return
  } else {
      try {
        let Formdata :FormData = new FormData();
        Formdata.append("memberId" ,this.addMember.value.memberId)
        Formdata.append("firstName" ,this.addMember.value.firstName);
        Formdata.append("middleName" ,this.addMember.value.middleName);
        Formdata.append("lastName" ,this.addMember.value.lastName);
        Formdata.append("gender" ,this.addMember.value.gender);
        Formdata.append("dob" ,this.addMember.value.dob);
        Formdata.append("address" ,this.addMember.value.address);
        Formdata.append("city" ,this.addMember.value.city);
        Formdata.append("state" ,this.addMember.value.state);
        Formdata.append("zipcode" ,this.addMember.value.zipcode);
        Formdata.append("mobile" ,this.addMember.value.mobile);
        Formdata.append("email" ,this.addMember.value.email);
        Formdata.append("height" ,this.addMember.value.height);
        Formdata.append("weight" ,this.addMember.value.weight);
        Formdata.append("chest" ,this.addMember.value.chest);
        Formdata.append("waist" ,this.addMember.value.waist);
        Formdata.append("thigh" ,this.addMember.value.thigh);
        Formdata.append("arms" ,this.addMember.value.arms);
        Formdata.append("fat" ,this.addMember.value.fat);
        Formdata.append("userName" ,this.addMember.value.userName);
        Formdata.append("password" ,this.addMember.value.password);
        Formdata.append("memberShip" ,this.addMember.value.memberShip);
        Formdata.append("memberShipfrom" ,this.addMember.value.memberShipfrom);
        Formdata.append("memberShipto" ,this.addMember.value.memberShipto);
        Formdata.append("image" ,this.images);
        this.service.addMembers(Formdata).subscribe((res) => {
	      this.router.navigate(['/admin/member'])
      
        })
      } catch (err) {
      }
    }
  }


	open(content: TemplateRef<any>) {
	}
}