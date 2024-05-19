import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent {
  @Input() data: any;
 

  constructor(
    private dialogRef: MatDialogRef<UserUpdateComponent>,
    private userService: UserService, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) private dialogData: any
  ) {}

  ngOnInit(): void {
    this.data = { ...this.dialogData };
  }


  updateUser(): void {
    this.userService.updateUser(this.data).subscribe(
      (response) => {
        this.dialogRef.close(true);
        this.toastr.success('Alert', 'User Updated!');
      },
      (error) => {
        // Handle error
        this.toastr.error('Error', 'Verify your data');

      }
    );
  }
}
