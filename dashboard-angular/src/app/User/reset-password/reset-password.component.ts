import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  verificationCode: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage: string;

  constructor(private userService: UserService, private toastr: ToastrService,private router: Router ) {}

  resetPassword(): void {
    if (!this.verificationCode) {
      this.errorMessage = 'Verification code is required.';
      this.toastr.warning('Error', 'Verification code is required.');
      return; 
    }
  
    if (this.newPassword !== this.confirmPassword) {
      this.toastr.warning('Error', 'Passwords do not match');
      return; 
    }

    this.errorMessage = '';
    this.userService
      .resetPassword(this.verificationCode, this.newPassword, this.confirmPassword)
      .subscribe(
        response => {  
          console.log('Password reset successfully:', response);
          this.toastr.success('Alert', 'Password reset successfully');
          window.location.href = 'http://localhost:5000';
        },
        error => {
          console.error('Failed to reset password:', error);
          this.toastr.error('Error', 'Verify your code please.');
          this.errorMessage = 'Verify your code please.';
        }
      );
  }
}
