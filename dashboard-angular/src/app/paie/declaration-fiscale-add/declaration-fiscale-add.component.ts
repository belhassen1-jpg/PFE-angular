import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PaieService } from '../paie.service';

@Component({
  selector: 'app-declaration-fiscale-add',
  templateUrl: './declaration-fiscale-add.component.html',
  styleUrls: ['./declaration-fiscale-add.component.scss']
})
export class DeclarationFiscaleAddComponent {
  newDeclarationFisc: any = {}; // Object to store the new teacher data
  empId: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { empId: number },
    private dialogRef: MatDialogRef<DeclarationFiscaleAddComponent>,private toastr: ToastrService,
    private paieService: PaieService
  ) {}


  confirmParticipation(confirm: boolean): void {
    if (confirm) {
      this.paieService.genererDeclarationFiscale(this.data.empId).subscribe(
        (response) => {
          // Handle successful participation
          console.log('Declaration Fiscale Added successfully:', response);
          this.toastr.success('Declaration Fiscale Added successfully.', 'Alert');
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
          console.error('Error Declaration Fiscale adding:', error);
          this.dialogRef.close(true);
        }
      );
    } else {
      // User cancelled participation
      console.log('Participation cancelled.');
      this.toastr.error('Something went wrong.', 'Error');

    }
  }
}
