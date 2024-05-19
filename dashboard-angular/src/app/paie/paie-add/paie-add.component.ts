import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PaieService } from '../paie.service';

@Component({
  selector: 'app-paie-add',
  templateUrl: './paie-add.component.html',
  styleUrls: ['./paie-add.component.scss']
})
export class PaieAddComponent {
  newPaie: any = {}; // Object to store the new teacher data
  empId: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { empId: number },
    private dialogRef: MatDialogRef<PaieAddComponent>,private toastr: ToastrService,
    private paieService: PaieService
  ) {}


  confirmParticipation(confirm: boolean): void {
    if (confirm) {
      this.paieService.calculerEtSauvegarderPaie(this.data.empId).subscribe(
        (response) => {
          // Handle successful participation
          console.log('Paie Added successfully:', response);
          this.toastr.success('Paie Added successfully.', 'Alert');
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
          console.error('Error paie adding:', error);
          this.dialogRef.close(true);
          this.toastr.error('Something went wrong.', 'Error');
        }
      );
    } else {
      // User cancelled participation
      console.log('Participation cancelled.');
    }
  }
}
