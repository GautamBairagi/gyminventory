import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-membershhip-mangess',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-membershhip-mangess.component.html',
  styleUrls: ['./add-membershhip-mangess.component.scss']
})
export class AddMembershhipMangessComponent {


  membershipManagement !: FormGroup;
  ckDep: boolean = false;

  constructor(
private fb:FormBuilder
  ){
    this.membershipManagement = this.fb.group({
      UploadFingerprint: ['' ,Validators.required],
      MemberRegister: ['' ,Validators.required],
      Email: ['',Validators.required],
    })
  }
}
