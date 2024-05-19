import { Component } from '@angular/core';
import { FinanceService } from '../finance.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-obj-epargne-add',
  templateUrl: './obj-epargne-add.component.html',
  styleUrls: ['./obj-epargne-add.component.scss']
})
export class ObjEpargneAddComponent {
  newObjEpargne: any = {}; // Object to store the new teacher data

  constructor(
    private dialogRef: MatDialogRef<ObjEpargneAddComponent>,private toastr: ToastrService,
    private financeService: FinanceService
  ) {}

  addObjEpargne(): void {
    this.financeService.addObjectifEpargne(this.newObjEpargne).subscribe(
      (response) => {
        this.dialogRef.close(true);
        this.toastr.success('Alert', 'Objectif Epargne Added');
      },
      (error) => {
        // Handle error
        console.log(error);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
