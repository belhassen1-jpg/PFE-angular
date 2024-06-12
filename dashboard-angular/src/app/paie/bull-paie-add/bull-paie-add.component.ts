import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PaieService } from '../paie.service';

@Component({
  selector: 'app-bull-paie-add',
  templateUrl: './bull-paie-add.component.html',
  styleUrls: ['./bull-paie-add.component.scss']
})
export class BullPaieAddComponent {
  newBullPaie: any = {}; 
  empId: number;

  constructor( @Inject(MAT_DIALOG_DATA) public data: { empId: number },
    private dialogRef: MatDialogRef<BullPaieAddComponent>,private toastr: ToastrService,
    private paieService: PaieService
  ) {}


  confirmParticipation(confirm: boolean): void {
    if (confirm) {
      this.paieService.genererBulletinPaie(this.data.empId).subscribe(
        (response) => {
         
          console.log('Bull Paie Added successfully:', response);
          this.toastr.success('Bulletin Paie Added successfully.', 'Alert');
          this.dialogRef.close(true);
        },
        (error) => {
         
          console.error('Error bull paie adding:', error);
          this.dialogRef.close(true);
        }
      );
    } else {
   
      console.log('Participation cancelled.');
      this.toastr.error('Something went wrong.', 'Error');
    }
  }
}
