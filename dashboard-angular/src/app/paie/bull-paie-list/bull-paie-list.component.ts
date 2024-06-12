import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BullPaieAddComponent } from '../bull-paie-add/bull-paie-add.component';
import { PaieService } from '../paie.service';

@Component({
  selector: 'app-bull-paie-list',
  templateUrl: './bull-paie-list.component.html',
  styleUrls: ['./bull-paie-list.component.scss']
})
export class BullPaieListComponent {
  displayedColumns: string[] = ['nomEntreprise','datePaie' ,'cotisationsSociales', 'heuresTravaillees', 
  'salaireNet', 'salaireBrut', 'periodeDebut'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paieService: PaieService, private dialog: MatDialog, private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
      this.getAllBullPaies(empId);
    });
  }

  getAllBullPaies(empId: number): void {
    this.paieService.obtenirBulletinsPaie(empId).subscribe({
      next: (res: any[]) => { 
        console.log('BullPaies:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing feuilletemps lists');
        console.log(res);
      },
    });
  }

  addBullPaie(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
    const dialogRef = this.dialog.open(BullPaieAddComponent, {
      width: '30%',
      data: { empId }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.params.subscribe(params => {
          const empId = params['id'];
          this.getAllBullPaies(empId);
        });
      }
    });
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
