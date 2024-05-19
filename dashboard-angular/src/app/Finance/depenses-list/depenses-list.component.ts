import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FinanceService } from '../finance.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentAddComponent } from 'src/app/Department/department-add/department-add.component';
import { DepensesAddComponent } from '../depenses-add/depenses-add.component';

@Component({
  selector: 'app-depenses-list',
  templateUrl: './depenses-list.component.html',
  styleUrls: ['./depenses-list.component.scss']
})
export class DepensesListComponent {
 displayedColumns: string[] = ['categorie', 'montant', 'description', 'dateDepense'];
 dataSource: MatTableDataSource<any>;

 @ViewChild(MatPaginator) paginator: MatPaginator;
 @ViewChild(MatSort) sort: MatSort;

 constructor(private financeService: FinanceService, private dialog: MatDialog, private toastr: ToastrService) {}

 ngOnInit(): void {
    this.getAllDepenses();
 
 }

 getAllDepenses(): void {
   this.financeService.getDepensesForCurrentUser().subscribe({
     next: (res) => {
       console.log('Depenses:', res);

       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     },
     error: (res) => {
       alert('Error while showing depenses lists');
     },
   });
 }

 addDepense(): void {
   const dialogRef = this.dialog.open(DepensesAddComponent, {
     width: '30%',
     // position: { top: '10%', left: '30%' },
   });

   dialogRef.afterClosed().subscribe((result) => {
     if (result) {
       this.getAllDepenses();
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
