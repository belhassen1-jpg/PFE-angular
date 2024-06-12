import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService, private toastr: ToastrService) {}

  resetPassword(): void {
    if (!this.verificationCode) {
      this.errorMessage = 'Verification code is required.';
      this.toastr.warning('Error', 'Verification code is required.');

    }
  
     else if (this.newPassword !== this.confirmPassword) {
      this.toastr.warning('Error', 'Passwords do not match');
    } else {
      
      this.errorMessage = '';

 
      this.userService
        .resetPassword(this.verificationCode, this.newPassword, this.confirmPassword)
        .subscribe(
          (response) => {
            console.log('Password reset successfully:', response);
            this.toastr.success('Alert', 'Password reset successfully');

          
          },
          (error) => {
            console.error('Failed to reset password:', error);
            this.toastr.error('Error', 'Verify your code please.');

         
          }
        );
    }
  }
}
