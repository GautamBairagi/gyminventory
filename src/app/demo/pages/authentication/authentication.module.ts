import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthenticationRoutingModule,MatSnackBarModule]
})
export class AuthenticationModule {}
