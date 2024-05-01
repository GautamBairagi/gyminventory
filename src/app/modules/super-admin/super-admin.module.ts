import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';

import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MembershipTypeComponent } from '../component/membership-type/membership-type.component';
import { MembersComponent } from '../component/members/members.component';
import { AddStaffComponent } from '../component/shared/add-staff/add-staff.component';

@NgModule({
  declarations: [
    SuperAdminComponent,
   
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    MembershipTypeComponent,
    MembersComponent,
    AddStaffComponent
  ]
})
export class SuperAdminModule { }
