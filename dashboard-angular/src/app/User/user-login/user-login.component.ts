import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, public router: Router, private toastr: ToastrService) {}

  login(): void {
    this.userService.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log('Authentication successful:', response);

        // Parse the JSON string to extract the username
        const jsonResponse = JSON.parse(response.substring(response.indexOf('{')));

      // Extract the username
       const username = jsonResponse.username;
       const userId = jsonResponse.user;
       const userRole = jsonResponse.userRole;

       console.log(username, userId, userRole);

         // Store user information in session storage
        localStorage.setItem('username', username);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);



        // Redirect based on user role
      switch (userRole) {
        case 'Guest':
          // this.router.navigate(['/dashboard']);
          window.location.href = 'http://localhost:5000';
          break;
        case 'User':
          // this.router.navigate(['/dashboard']);
          window.location.href = 'http://localhost:5000';
          break;
        case 'Admin':
          this.router.navigate(['/dashboard']);
          break;
        case 'RH':
          this.router.navigate(['/dashboard']);
          break;
        case 'Employee':
            this.router.navigate(['/dashboard']);
            break;
        default:
          // Handle unexpected role
          console.error('Unexpected role:', userRole);
      }
        // notication
         this.toastr.success('Alert', 'Login Successful!');
      },
      (error) => {
        console.error('Authentication failed:', error);

            // Check if the error message contains 'User is not verified'
            if (error.error.includes('User is not verified')) {
                 this.toastr.error('Alert', 'Please Verify your account');
            } else {
                 this.toastr.error('Alert', 'Verify your data !');
            }
        // Handle authentication error (e.g., show error message to the user)
      }
    );
  }
}
