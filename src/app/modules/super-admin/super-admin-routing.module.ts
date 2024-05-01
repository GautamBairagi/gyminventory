import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import DefaultComponent from 'src/app/demo/default/default.component';
import TypographyComponent from 'src/app/demo/elements/typography/typography.component';
import ElementColorComponent from 'src/app/demo/elements/element-color/element-color.component';

import SamplePageComponent from 'src/app/demo/sample-page/sample-page.component';
import { MembershipTypeComponent } from '../component/membership-type/membership-type.component';
import { AddMembersComponent } from '../component/shared/add-members/add-members.component';
import { MembersComponent } from '../component/members/members.component';
import { AddStaffComponent } from '../component/shared/add-staff/add-staff.component';
import { StaffComponent } from '../component/staff/staff.component';
import { WorkoutLogComponent } from '../component/workout-log/workout-log.component';
import { AddWorkoutComponent } from '../component/shared/add-workout/add-workout.component';
import { AddProductComponent } from '../component/shared/add-product/add-product.component';
import { ProductComponent } from '../component/product/product.component';
import { PaymentComponent } from '../component/payment/payment.component';
import { AddMembershhipMangessComponent } from '../component/shared/add-membershhip-mangess/add-membershhip-mangess.component';
import { AddRegisterPaymentComponent } from '../component/shared/add-register-payment/add-register-payment.component';
import { AddPrintNotesComponent } from '../component/shared/add-print-notes/add-print-notes.component';
import { AddStockManageComponent } from '../component/shared/add-stock-manage/add-stock-manage.component';


const routes: Routes = [
  {
      path: '',
      component: SuperAdminComponent,
      children: [
        // {
        //   path: '',
        //   redirectTo: '/default',
        //   pathMatch: 'full'
        // },
        {
          path: '',
          component : DefaultComponent
          // loadComponent: () => import('./demo/default/default.component')
        },
        {
          path: 'typography',
          component : TypographyComponent
          // loadComponent: () => import('./demo/elements/typography/typography.component')
        },
        {
          path: 'color',
          component : ElementColorComponent
          // loadComponent: () => import('./demo/elements/element-color/element-color.component')
        },
        {
          path: 'sample-page',
          component : SamplePageComponent 
          // loadComponent: () => import('./demo/sample-page/sample-page.component')
        },
        {
          path : "membership",
          component : MembershipTypeComponent
        },
        {
          path : "member/add",
          component : AddMembersComponent
        },
        {
          path : "member",
          component : MembersComponent
        },
        {
          path : "staff/add",
          component : AddStaffComponent
        },
        {
          path : "staff",
          component : StaffComponent
        },
        {
          path : "workoutlog",
          component : WorkoutLogComponent
        },
        {
          path : "workoutlog/add",
          component : AddWorkoutComponent
        },
        {
          path : "product",
          component : ProductComponent
        },
       
        {
          path : "payment",
          component : PaymentComponent
        }, 
        {
           path:"Membershipmanagment",
           component:AddMembershhipMangessComponent
        },
        {
          path:"RegisterPayment",
          component:AddRegisterPaymentComponent
       },
       {
        path:"PrintNotes",
        component:AddPrintNotesComponent
     },
     {
      path:"StockMangment",
      component:AddStockManageComponent
   }
        
        
        


        
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
