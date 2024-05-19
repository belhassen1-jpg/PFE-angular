import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from '../department.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.scss']
})
export class DepartmentUpdateComponent implements OnInit {
  departments: any[] = [];
  employees: any[] = [];
  selectedEmployee: number;

  constructor(
    private dialogRef: MatDialogRef<DepartmentUpdateComponent>,
    private departmentService: DepartmentService, private employeeService: EmployeeService,
    private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    // Fetch the list of employees from your service
    this.employeeService.getEmpList().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        this.toastr.error('Error', 'Failed to fetch employees');
      }
    );
  }

  assignEmployee(): void {
    const departmentId = this.data.id; // Assuming 'id' is the department ID
    if (this.selectedEmployee && departmentId) {
      this.departmentService.assignEmployee(departmentId, this.selectedEmployee).subscribe(
        (response) => {
          this.toastr.success('Success', 'Employee assigned to department');
          this.dialogRef.close(true);
        },
        (error) => {
          this.toastr.error('Error', 'Failed to assign employee');
        }
      );
    } else {
      this.toastr.warning('Warning', 'Please select an employee');
    }
  }
}
