import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConventionService } from '../convention.service';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-convention-delete-employee',
  templateUrl: './convention-delete-employee.component.html',
  styleUrls: ['./convention-delete-employee.component.scss']
})
export class ConventionDeleteEmployeeComponent implements OnInit {
  empId: number;
  conventions: any[] = [];

  constructor(
    private conventionService: ConventionService, private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<ConventionDeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { conventionId: number }
  ) { }

  ngOnInit(): void {
    this.loadConventions();
  }

  loadConventions(): void {
    this.conventionService.getAllConventions().subscribe(
      (response) => {
        this.conventions = response;
      },
      (error) => {
        // Handle error here
      }
    );
  }

  deleteEmployeeFromConvention(): void {
    const conventionId = this.data.conventionId;
    this.conventionService.deleteEmployeeFromConvention(conventionId, this.empId).subscribe(
      () => {
        console.log('Employee deleted from convention successfully.');
        this.dialogRef.close(true); // Signal success and close dialog
      },
      (error) => {
        console.error('Error deleting employee from convention:', error);
        // Optionally, you can handle errors here
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); // Signal cancellation and close dialog
  }

}
