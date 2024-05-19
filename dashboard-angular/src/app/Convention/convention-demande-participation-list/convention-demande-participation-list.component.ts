import { Component, OnInit, ViewChild } from '@angular/core';
import { ConventionService } from '../convention.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ConventionAcceptParticipateComponent } from '../convention-accept-participate/convention-accept-participate.component';

@Component({
  selector: 'app-convention-demande-participation-list',
  templateUrl: './convention-demande-participation-list.component.html',
  styleUrls: ['./convention-demande-participation-list.component.scss']
})
export class ConventionDemandeParticipationListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private conventionService: ConventionService, 
    private dialog: MatDialog, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAllConventionsDemandes();
  }

  getAllConventionsDemandes(): void {
    this.conventionService.getAllConventionsDemandes().subscribe({
      next: (res) => {
        console.log('Convention Demandes:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing convention lists');
      },
    });
  }

  validateDemandeConvention(convDemandeId: number): void {
    const dialogRef = this.dialog.open(ConventionAcceptParticipateComponent, {
      width: '30%',
      data: { convDemandeId }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllConventionsDemandes();
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
