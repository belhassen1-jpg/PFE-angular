import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FinanceService } from '../finance.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-depenses-add',
  templateUrl: './depenses-add.component.html',
  styleUrls: ['./depenses-add.component.scss']
})
export class DepensesAddComponent {
  newDepense: any = {}; // Object to store the new teacher data

  constructor(
    private dialogRef: MatDialogRef<DepensesAddComponent>,private toastr: ToastrService,
    private financeService: FinanceService
  ) {}

  addDep(): void {
    this.financeService.addDepense(this.newDepense).subscribe(
      (response) => {
        this.dialogRef.close(true);
        this.toastr.success('Alert', 'Depense Added');
      },
      (error) => {
        // Handle error
        console.log(error);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
