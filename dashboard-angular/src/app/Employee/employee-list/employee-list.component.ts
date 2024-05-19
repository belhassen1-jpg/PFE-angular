import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../employee.service';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { GetEmployeeComponent } from 'src/app/Employee/get-employee/get-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['firstName', 'title',  'startDate',
   'endDate','actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empservice: EmployeeService, private dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit(): void {
     this.getAllEmp();
  
  }

  getAllEmp(): void {
    this.empservice.getEmpList().subscribe({
      next: (res) => {
        console.log('Employees:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing dep lists');
      },
    });
  }

  addEmployee(): void {
    const dialogRef = this.dialog.open(EmployeeAddComponent, {
      width: '30%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllEmp();
      }
    });
  }
  
  updateEmployee(row: any): void {
    const dialogRef = this.dialog.open(EmployeeUpdateComponent, {
      width: '30%',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllEmp();
      }
    });
  }

  deleteEmployee(depId: number): void {
    if (confirm('Are you sure you want to delete this dep?')) {
      this.empservice.deleteEmp(depId).subscribe(
        (response) => {
          this.getAllEmp();
          this.toastr.success('Alert', 'Employee deleted');
        },
        (error) => {
          // Handle error
          this.toastr.error('Alert', 'Employee deleted');
        }
      );
    }
  }

  getEmployee(row: any): void {
    const dialogRef = this.dialog.open(GetEmployeeComponent, {
      width: '35%',
      height: '60%',
      data: row // Pass the selected employee data to the dialog
    });
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllEmp();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
