import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  newUser: any = {}; 

  constructor(
    private userservice: UserService, private toastr: ToastrService, private dialogRef: MatDialogRef<AddUserComponent>,
  ) {}

  registerUser(): void {
    this.userservice.RegisterUser(this.newUser).subscribe(
      (response) => {
        console.log("user added");
        this.dialogRef.close(true);
        this.toastr.success('Alert', 'Please Verify the Email inbox');

      },
      (error) => {
        // Handle error
        console.log(error);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
