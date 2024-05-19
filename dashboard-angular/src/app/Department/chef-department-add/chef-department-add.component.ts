import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chef-department-add',
  templateUrl: './chef-department-add.component.html',
  styleUrls: ['./chef-department-add.component.scss']
})
export class ChefDepartmentAddComponent implements OnInit {
  employeId: number | null = null;
  departementId: number | null = null;
  specialisation: string | null = null;

  departments: any[] = [];
  employees: any[] = [];

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService,
     private toastr: ToastrService, private dialogRef: MatDialogRef<ChefDepartmentAddComponent>) { }

     ngOnInit(): void {
      this.loadDepartments();
      this.loadEmployees();
    }

  loadDepartments(): void {
    this.departmentService.getDepList().subscribe(
      (response) => {
        this.departments = response;
      },
      (error) => {
        // Handle error
      }
    );
  }
  loadEmployees(): void {
    this.employeeService.getEmpList().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        // Handle error
      }
    );
  }


  assignChefToDepartment() {
    if (!this.employeId || !this.departementId || !this.specialisation) {
      this.toastr.error('Please fill in all fields');
      return;
    }

    const chefDepartementDetails = { specialisation: this.specialisation };

    this.departmentService.assignChefToDepartment(this.employeId, this.departementId, chefDepartementDetails)
      .subscribe(() => {
        this.toastr.success('Chef assigned to department successfully');
        this.dialogRef.close(true);
        // Reset form fields
        this.employeId = null;
        this.departementId = null;
        this.specialisation = null;
      }, error => {
        this.dialogRef.close(true);
        this.toastr.error('Error assigning chef to department');
        console.error('Error:', error);
      });
  }
}
