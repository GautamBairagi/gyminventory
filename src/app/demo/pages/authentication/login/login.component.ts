import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MembershipService } from 'src/app/services/membership.service';
import { TosterSerService } from 'src/app/services/toster-ser.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  loginForm!: FormGroup;
  ckDep: boolean = false;
  constructor(
    private fb: FormBuilder,
    private service: MembershipService, // Inject your MembershipService
    private router: Router,
    private toastService: TosterSerService
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}
  logins() {
    if (this.loginForm.invalid) {
      this.ckDep = true;
      return;
    }

    this.service.login(this.loginForm.value).subscribe(
      (res: any) => {
        // Check if login was successful
        if (res && res.token) {
          // Save token in localStorage or wherever you manage authentication
          localStorage.setItem('token', res.token);
          // Redirect to admin dashboard
          this.router.navigate(['admin']);
          this.toastService.showSuccess('Login successful');
        } else {
          // Handle invalid credentials or other errors
          console.error('Invalid credentials or server error');
        }
      },
      (error) => {
        // Handle HTTP error
        console.error('Error occurred:', error);
      }
    );
  }

}