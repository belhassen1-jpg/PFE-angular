import { Component, ViewChild } from '@angular/core';
import { PlanningService } from '../planning.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FeuilleTempsAddComponent } from '../feuille-temps-add/feuille-temps-add.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-feuille-temps-list',
  templateUrl: './feuille-temps-list.component.html',
  styleUrls: ['./feuille-temps-list.component.scss']
})
export class FeuilleTempsListComponent {
  displayedColumns: string[] = ['heureDebut', 'heureFin', 'jour', 'estApprouve', 'projectname'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planningservice: PlanningService, private dialog: MatDialog, private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getAllFeuilleTempss();
  }

  getAllFeuilleTempss(): void {
    this.planningservice.getFeuilleTempsForUser().subscribe({
      next: (res: any[]) => { // Explicitly type the response as an array of any
        console.log('FeuilleTempss:', res);

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


  addFeuilleTemps(): void {
    const dialogRef = this.dialog.open(FeuilleTempsAddComponent, {
      width: '30%',
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllFeuilleTempss();
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
