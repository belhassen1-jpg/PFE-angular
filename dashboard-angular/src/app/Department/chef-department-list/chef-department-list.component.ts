import { Component, ViewChild } from '@angular/core';
import { DepartmentService } from '../department.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChefDepartmentAddComponent } from '../chef-department-add/chef-department-add.component';

@Component({
  selector: 'app-chef-department-list',
  templateUrl: './chef-department-list.component.html',
  styleUrls: ['./chef-department-list.component.scss']
})
export class ChefDepartmentListComponent {
  displayedColumns: string[] = ['id' ,'firstName', 'lastName', 'specialisation', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private depservice: DepartmentService, private dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit(): void {
     this.getAllDep();
  
  }

  getAllDep(): void {
    this.depservice.getChefDepList().subscribe({
      next: (res) => {
        console.log('Chef Departments:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing dep lists');
      },
    });
  }

  addChefDepartment(): void {
    const dialogRef = this.dialog.open(ChefDepartmentAddComponent, {
      width: '30%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllDep();
      }
    });
  }

  deleteChefDep(ChefdepId: number): void {
    if (confirm('Are you sure you want to delete this chef department?')) {
      this.depservice.deleteChefDep(ChefdepId).subscribe(
        (response) => {
          this.getAllDep();
          this.toastr.success('Alert', 'Chef Department deleted');
        },
        (error) => {
          // Handle error
          this.toastr.error('Alert', 'something went wrong');
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
