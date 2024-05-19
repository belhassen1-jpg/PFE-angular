import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';
import { DepartmentService } from 'src/app/Department/department.service';
import { UserService } from 'src/app/User/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  employeeData: any = {}; // Initialize an empty object for employee data
  departments: any[] = [];
  users: any[] = [];


  constructor(private toastr: ToastrService, private dialogRef: MatDialogRef<EmployeeAddComponent>,
    private departmentService: DepartmentService,  private userService: UserService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadUsers();
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
  loadUsers(): void {
    this.userService.getUserList().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        // Handle error
      }
    );
  }

  addEmployee(): void {

    this.employeeService.createEmp(this.employeeData, this.employeeData.departmentId, this.employeeData.userId).subscribe(
      (response) => {
         
        console.log("employee added");
        this.toastr.success('Alert', 'Employee Added');
        this.employeeData = {};
        this.dialogRef.close(true);
      },
      (error) => {
        // Handle error
        console.log(error);
        this.dialogRef.close(true);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
