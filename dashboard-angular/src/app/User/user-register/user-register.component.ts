import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {
  newUser: any = {}; 

  constructor(
    private userservice: UserService, private toastr: ToastrService
  ) {}

  registerUser(): void {
    this.userservice.RegisterUser(this.newUser).subscribe(
      (response) => {
      
        console.log("user added");
        this.toastr.success('Alert', 'Please Verify your Email inbox');

      },
      (error) => {
        
        console.log(error);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
