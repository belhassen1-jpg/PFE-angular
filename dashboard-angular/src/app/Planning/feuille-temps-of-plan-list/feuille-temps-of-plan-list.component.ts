import { Component, ViewChild } from '@angular/core';
import { PlanningService } from '../planning.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FeuilleTempsAcceptComponent } from '../feuille-temps-accept/feuille-temps-accept.component';

@Component({
  selector: 'app-feuille-temps-of-plan-list',
  templateUrl: './feuille-temps-of-plan-list.component.html',
  styleUrls: ['./feuille-temps-of-plan-list.component.scss']
})
export class FeuilleTempsOfPlanListComponent {
  displayedColumns: string[] = ['id' ,'heureDebut', 'heureFin', 'jour', 'estApprouve', 'projectname', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planningservice: PlanningService, private dialog: MatDialog, private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const planId = params['id'];
      this.getAllFeuilleTempss(planId);
    });
  }

  getAllFeuilleTempss(planId: number): void {
    this.planningservice.getFeuilleTempsWithPlanId(planId).subscribe({
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

  validateFeuilleTemps(feuilleTempsId: number): void {
    const dialogRef = this.dialog.open(FeuilleTempsAcceptComponent, {
      width: '30%',
      data: { feuilleTempsId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.params.subscribe(params => {
          const planId = params['id'];
          this.getAllFeuilleTempss(planId);
        });
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
