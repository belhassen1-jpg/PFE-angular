import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/Department/department.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {
  @Input() data: any;

  constructor(
    private dialogRef: MatDialogRef<EmployeeUpdateComponent>,
    private empService: EmployeeService, private toastr: ToastrService, private departmentService: DepartmentService,
    @Inject(MAT_DIALOG_DATA) private dialogData: any
  ) {}

  ngOnInit(): void {
    this.data = { ...this.dialogData };
  }

  updateEmployee(): void {
    // const { empId, ...employeeData } = this.data; // Remove empId from data object
    this.empService.updateEmp(this.data.empId, this.data).subscribe(
      (response) => {
        this.dialogRef.close(true);
        this.toastr.success('Alert', 'Employee Updated!');
      },
      (error) => {
        // Handle error
        this.toastr.error('Error', 'Verify your data');

      }
    );
  }
}
