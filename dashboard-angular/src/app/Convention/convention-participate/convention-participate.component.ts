import { Component, Inject, OnInit } from '@angular/core';
import { ConventionService } from '../convention.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-convention-participate',
  templateUrl: './convention-participate.component.html',
  styleUrls: ['./convention-participate.component.scss']
})
export class ConventionParticipateComponent {
  userId: number;
  conventionId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { conventionId: number }, private toastr: ToastrService,
    private conventionService: ConventionService, private dialogRef: MatDialogRef<ConventionParticipateComponent>,
  ) { }

  confirmParticipation(confirm: boolean): void {
    if (confirm) {
      // User confirmed participation, call API
      const userId = Number(localStorage.getItem('userId')); // Assuming user ID is stored in local storage
      this.conventionService.participateInConvention(userId, this.data.conventionId).subscribe(
        (response) => {
          // Handle successful participation
          console.log('Participation confirmed successfully:', response);
          this.toastr.success('You have successfully registered for the convention.', 'Alert');
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
          console.error('Error confirming participation:', error);
          this.toastr.error('Failed to register for the convention. Please try again.', 'Alert');
          this.dialogRef.close(true);
        }
      );
    } else {
      // User cancelled participation
      console.log('Participation cancelled.');
    }
  }
}
