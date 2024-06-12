import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PaieService } from '../paie.service';

@Component({
  selector: 'app-emp-bull-paie-list',
  templateUrl: './emp-bull-paie-list.component.html',
  styleUrls: ['./emp-bull-paie-list.component.scss']
})
export class EmpBullPaieListComponent {
  displayedColumns: string[] = ['nomEntreprise','datePaie' ,'cotisationsSociales', 'heuresTravaillees', 
  'salaireNet', 'salaireBrut', 'periodeDebut'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paieService: PaieService, private dialog: MatDialog,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {    
      this.getAllBullPaies();
  }

  getAllBullPaies(): void {
    this.paieService.getBullPaiesForUser().subscribe({
      next: (res: any[]) => { 
        console.log('BullPaies:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing bull paies lists');
        console.log(res);
      },
    });
  }

// paie
viewLastPaie(): void {
  this.router.navigate(['/dashboard/emp-LastPaie']);
}

viewLastBullPaie(): void {
  this.router.navigate(['/dashboard/emp-LastBullPaie']);
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
