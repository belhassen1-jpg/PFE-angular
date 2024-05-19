import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConventionService } from '../convention.service';

@Component({
  selector: 'app-convention-accept-participate',
  templateUrl: './convention-accept-participate.component.html',
  styleUrls: ['./convention-accept-participate.component.scss']
})
export class ConventionAcceptParticipateComponent {
  constructor(
    public dialogRef: MatDialogRef<ConventionAcceptParticipateComponent>, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { convDemandeId: number },
    private conventionService: ConventionService
  ) { }

  confirmValidation(): void {
    const convDemandeId = this.data.convDemandeId;
    this.conventionService.validateDemandeConvention(convDemandeId).subscribe(
      () => {
        console.log('Validation successful.');
        this.toastr.success('Validation successful.', 'Alert');
        this.dialogRef.close(true); // Signal success and close dialog
      },
      (error) => {
        console.error('Error validating participation:', error);
        this.toastr.error('Error during validation.', 'Alert');
        // Optionally, you can handle errors here
        this.dialogRef.close(false); // Signal failure and close dialog
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); // Signal cancellation and close dialog
  }
}
