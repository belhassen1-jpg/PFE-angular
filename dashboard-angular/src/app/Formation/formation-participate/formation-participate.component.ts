import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-participate',
  templateUrl: './formation-participate.component.html',
  styleUrls: ['./formation-participate.component.scss']
})
export class FormationParticipateComponent {
  userId: number;
  sessionId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { sessionId: number },
    private toastr: ToastrService,
    private formationService: FormationService,
    private dialogRef: MatDialogRef<FormationParticipateComponent>,
  ) { }

  confirmParticipation(confirm: boolean): void {
    if (confirm) {
      // User confirmed participation, call API
      const userId = Number(localStorage.getItem('userId'));
      this.formationService.inscrireEmployeASession(this.data.sessionId, userId).subscribe(
        (response) => {
          // Handle successful registration
          console.log('Registration confirmed successfully:', response);
          this.toastr.success('You have successfully registered for the session.', 'Success');
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
          console.error('Error confirming registration:', error);
          this.toastr.error('Error during registration.', 'Error');
          this.dialogRef.close(false);
        }
      );
    } else {
      // User cancelled participation
      console.log('Registration cancelled.');
    }
  }
}
