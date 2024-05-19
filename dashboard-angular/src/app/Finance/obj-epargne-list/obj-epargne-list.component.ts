import { Component, ViewChild } from '@angular/core';
import { FinanceService } from '../finance.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ObjEpargneAddComponent } from '../obj-epargne-add/obj-epargne-add.component';

@Component({
  selector: 'app-obj-epargne-list',
  templateUrl: './obj-epargne-list.component.html',
  styleUrls: ['./obj-epargne-list.component.scss']
})
export class ObjEpargneListComponent {
  displayedColumns: string[] = ['objectifMontant', 'montantActuel', 'description',  'dateDebut','dateFin'];
  dataSource: MatTableDataSource<any>;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 
  constructor(private financeService: FinanceService, private dialog: MatDialog, private toastr: ToastrService) {}
 
  ngOnInit(): void {
     this.getAllObjEpargnes();
  
  }
 
  getAllObjEpargnes(): void {
    this.financeService.getObjEpargneForCurrentUser().subscribe({
      next: (res) => {
        console.log('ObjEpargnes:', res);
 
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing obj epargnes lists');
      },
    });
  }
 
  addObjEpargne(): void {
    const dialogRef = this.dialog.open(ObjEpargneAddComponent, {
      width: '30%',
    });
 
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllObjEpargnes();
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
