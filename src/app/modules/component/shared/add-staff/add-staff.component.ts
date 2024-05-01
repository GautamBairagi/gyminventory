import { Component, OnInit,TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { StaffserviceService } from 'src/app/services/staffservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})

export class AddStaffComponent implements OnInit {
  url : any;
  images!:File
  member=false;

  // addMember !: FormGroup;
  addstaff!: FormGroup
  ckSetaff: boolean = false

  constructor(
    private fb:FormBuilder,
     private _serstaff: StaffserviceService,
      private route: ActivatedRoute,
      private router:Router){
        this.addstaff = this.fb.group({
          firstName: ['', Validators.required],
          middleName: ['', Validators.required],
          lastName: ['', Validators.required],
          gender: ['', Validators.required],
          dateOfBirth: ['', Validators.required],
          assignRole: ['', Validators.required],
          selectRole: ['', Validators.required],
          specialization: ['', Validators.required],
          homeTownAddress: ['', Validators.required],
          city: ['', Validators.required],
          mobileNumber: ['', Validators.required],
          email: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', Validators.required],
          displayImage: ['', Validators.required],
          role: ['Staff'],
        })
       }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(member => {
    //   console.log(member); 
    // }
  // );
  }

  onSelectFile(event) {
    this.images= event.target.files[0]
   if (event.target.files && event.target.files[0]) {
     var reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]); // read file as data url
     reader.onload = (event) => { // called once readAsDataURL is completed
       this.url = event.target.result;
       this.addstaff.value.displayImage=this.url
     }
   }
 }

 addstaffdata() {
  if (this.addstaff.invalid) {
    this.ckSetaff = true;
    console.log(this.addstaff.value)
    return
} else {
    try {
      let Formdata :FormData = new FormData();
      Formdata.append("firstName" ,this.addstaff.value.firstName);
      Formdata.append("middleName" ,this.addstaff.value.middleName);
      Formdata.append("lastName" ,this.addstaff.value.lastName);
      Formdata.append("gender" ,this.addstaff.value.gender);
      Formdata.append("dateOfBirth" ,this.addstaff.value.dateOfBirth);
      Formdata.append("assignRole" ,this.addstaff.value.assignRole);
      Formdata.append("selectRole" ,this.addstaff.value.selectRole);

      Formdata.append("specialization" ,this.addstaff.value.specialization);
      Formdata.append("homeTownAddress" ,this.addstaff.value.homeTownAddress);
      Formdata.append("city" ,this.addstaff.value.city);
      Formdata.append("mobileNumber" ,this.addstaff.value.mobileNumber);
      Formdata.append("email" ,this.addstaff.value.email);

      Formdata.append("username" ,this.addstaff.value.username);
      Formdata.append("password" ,this.addstaff.value.password);
      Formdata.append("role" ,"Staff");
      Formdata.append("displayImage" ,this.images);
      this._serstaff.addStaffpost(Formdata).subscribe((res) => {
      this.router.navigate(['/admin/staff'])
    
      })
    } catch (err) {
    }
  }
}


open(content: TemplateRef<any>) {
}
}

