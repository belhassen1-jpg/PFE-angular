import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../department.service';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentAddComponent } from '../department-add/department-add.component';
import { DepartmentUpdateComponent } from '../department-update/department-update.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent {
  displayedColumns: string[] = ['id' ,'nom', 'description', 'chefDepartement.employe.firstName', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private depservice: DepartmentService, private dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit(): void {
     this.getAllDep();
  
  }

  getAllDep(): void {
    this.depservice.getDepList().subscribe({
      next: (res) => {
        console.log('Departments:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing dep lists');
      },
    });
  }

  addDepartment(): void {
    const dialogRef = this.dialog.open(DepartmentAddComponent, {
      width: '30%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllDep();
      }
    });
  }
  
  updateDepartment(row: any): void {
    const dialogRef = this.dialog.open(DepartmentUpdateComponent, {
      width: '30%',
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllDep();
      }
    });
  }

  deleteDepartment(depId: number): void {
    if (confirm('Are you sure you want to delete this dep?')) {
      this.depservice.deleteDep(depId).subscribe(
        (response) => {
          this.getAllDep();
          this.toastr.success('Alert', 'Department deleted');
        },
        (error) => {
          // Handle error
          this.toastr.error('Alert', 'Department deleted');
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
