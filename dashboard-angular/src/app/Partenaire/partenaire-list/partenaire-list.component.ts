import { Component, ViewChild } from '@angular/core';
import { PartenaireAddComponent } from '../partenaire-add/partenaire-add.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire-list',
  templateUrl: './partenaire-list.component.html',
  styleUrls: ['./partenaire-list.component.scss']
})
export class PartenaireListComponent {
  displayedColumns: string[] = ['id' ,'nom', 'secteur', 'adresse', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private partenaireService: PartenaireService, private dialog: MatDialog, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getAllPartenaires();
  }

  getAllPartenaires(): void {
    this.partenaireService.getPartenaires().subscribe({
      next: (res: any[]) => { 
        console.log('Partenaires:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing partenaire lists');
      },
    });
  }


  addPartenaire(): void {
    const dialogRef = this.dialog.open(PartenaireAddComponent, {
      width: '30%',
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllPartenaires();
      }
    });
  }


  deletePartenaire(partenaireId: number): void {
    if (confirm('Are you sure you want to delete this partenaire?')) {
      this.partenaireService.deletePartner(partenaireId).subscribe(
        (response) => {
          this.getAllPartenaires();
          this.toastr.success('Alert', 'Partenaire deleted');
        },
        (error) => {
          // Handle error
          this.toastr.error('Alert', 'Partenaire deleted');
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
