import { Component, OnInit } from '@angular/core';
import { UserService } from '../User/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService, public router: Router, private toastr: ToastrService) {}

  login(): void {
    this.userService.authenticate(this.username, this.password).subscribe(
      (response) => {
        console.log('Authentication successful:', response);

       
        const jsonResponse = JSON.parse(response.substring(response.indexOf('{')));

      
       const username = jsonResponse.username;
       const userId = jsonResponse.user;
       const userRole = jsonResponse.userRole;

       console.log(username, userId, userRole);

       
        localStorage.setItem('username', username);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userRole', userRole);



      switch (userRole) {
        case 'Guest':
          this.router.navigate(['/home']);
        
          break;
        case 'User':
          this.router.navigate(['/home']);
          
          break;
        case 'Admin':
          window.location.href = 'https://192.168.1.100:4200/login'
          break;
        case 'RH':
          window.location.href = 'https://192.168.1.100:4200/login'
          break;
        case 'Employee':
          window.location.href = 'https://192.168.1.100:4200/login'
            break;
        default:
         
          console.error('Unexpected role:', userRole);
      }
     
         this.toastr.success('Alert', 'Login Successful!');
      },
      (error) => {
        console.error('Authentication failed:', error);

            if (error.error.includes('User is not verified')) {
                 this.toastr.error('Alert', 'Please Verify your account');
            } else {
                 this.toastr.error('Alert', 'Verify your data !');
            }
        
      }
    );
  }

}
