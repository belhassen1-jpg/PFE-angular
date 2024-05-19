import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { CongeService } from '../conge.service';

@Component({
  selector: 'app-status-edit-dialog',
  templateUrl: './status-edit-dialog.component.html',
  styleUrls: ['./status-edit-dialog.component.scss']
})
export class StatusEditDialogComponent {
  currentStatus: string;
  statuses = ['EN_ATTENTE', 'ACCEPTEE', 'REFUSEE'];

  constructor(
    public dialogRef: MatDialogRef<StatusEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private congeService: CongeService
  ) {
    this.currentStatus = data.currentStatus;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    console.log('Sending PUT request with userID:', this.data.empId); 
    this.congeService.approuverDemandeConge(this.data.demandeId, this.data.empId, this.currentStatus).subscribe(
      response => {
        // Process the response, show a message to the user
        this.dialogRef.close(response);
      },
      error => {
        // Handle the error, show a message to the user
        console.error('PUT request error:', error); // Log the error
        this.dialogRef.close();
      }
    );
  }
}
