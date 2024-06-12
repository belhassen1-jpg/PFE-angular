import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlanningService } from '../planning.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feuille-temps-accept',
  templateUrl: './feuille-temps-accept.component.html',
  styleUrls: ['./feuille-temps-accept.component.scss']
})
export class FeuilleTempsAcceptComponent {
  constructor(
    public dialogRef: MatDialogRef<FeuilleTempsAcceptComponent>, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { feuilleTempsId: number },
    private planningService: PlanningService
  ) { }

  confirmValidation(): void {
    const feuilleTempsId = this.data.feuilleTempsId;
    this.planningService.approveFeuilleTemps(feuilleTempsId).subscribe(
      () => {
        console.log('Validation successful.');
        this.toastr.success('Validation successful.', 'Alert');
        this.dialogRef.close(true); 
      },
      (error) => {
        console.error('Error validating participation:', error);
        
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); 
  }
}
