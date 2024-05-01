import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
     
      {
        path : '',
        loadChildren : ()=> import('../app/modules/super-admin/super-admin.module').then((s)=>s.SuperAdminModule),
       
       },
      // {
      //   path: 'default',
      //   loadComponent: () => import('./demo/default/default.component')
      // },
      // {
      //   path: 'typography',
      //   loadComponent: () => import('./demo/elements/typography/typography.component')
      // },
      // {
      //   path: 'color',
      //   loadComponent: () => import('./demo/elements/element-color/element-color.component')
      // },
      // {
      //   path: 'sample-page',
      //   loadComponent: () => import('./demo/sample-page/sample-page.component')
      // }
    ]
  },



  {
    path: '',
    component: GuestComponent,
    children: [
        {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}