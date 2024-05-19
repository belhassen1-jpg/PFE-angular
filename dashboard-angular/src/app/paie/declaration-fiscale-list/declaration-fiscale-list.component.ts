import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { PaieService } from '../paie.service';
import { DeclarationFiscaleAddComponent } from '../declaration-fiscale-add/declaration-fiscale-add.component';

@Component({
  selector: 'app-declaration-fiscale-list',
  templateUrl: './declaration-fiscale-list.component.html',
  styleUrls: ['./declaration-fiscale-list.component.scss']
})
export class DeclarationFiscaleListComponent {
  displayedColumns: string[] = ['id', 'dateDeclaration','totalRevenuImposable' ,'montantImpotDu', 'montantCotisationsSocialesDu', 
  'referenceDeclaration', 'autoriteFiscale'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paieService: PaieService, private dialog: MatDialog, private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
      this.getAllDeclarationFiscales(empId);
    });
  }

  getAllDeclarationFiscales(empId: number): void {
    this.paieService.obtenirDeclarationsFiscales(empId).subscribe({
      next: (res: any[]) => { // Explicitly type the response as an array of any
        console.log('DeclarationFiscales:', res);

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

  addDeclarationFiscale(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
    const dialogRef = this.dialog.open(DeclarationFiscaleAddComponent, {
      width: '30%',
      data: { empId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.params.subscribe(params => {
          const empId = params['id'];
          this.getAllDeclarationFiscales(empId);
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
