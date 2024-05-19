import { Component, ViewChild } from '@angular/core';
import { PlanningAddComponent } from '../planning-add/planning-add.component';
import { MatDialog } from '@angular/material/dialog';
import { PlanningService } from '../planning.service';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planning-list',
  templateUrl: './planning-list.component.html',
  styleUrls: ['./planning-list.component.scss']
})
export class PlanningListComponent {

  displayedColumns: string[] = ['id' ,'nomProjet', 'dateDebutValidite', 'dateFinValidite', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planningService: PlanningService, private dialog: MatDialog, private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllPlannings();
  }

  getAllPlannings(): void {
    this.planningService.getAllPlanningsWithDetails().subscribe({
      next: (res: any[]) => { // Explicitly type the response as an array of any
        console.log('Plannings:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing planning lists');
        console.log(res);
      },
    });
  }


  addPlanning(): void {
    const dialogRef = this.dialog.open(PlanningAddComponent, {
      width: '30%',
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllPlannings();
      }
    });
  }

  viewFeuilleTemps(planId: number): void {
    // this.dialogRef.close(true);
    this.router.navigate(['/dashboard/feuille-temps-plan', planId]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
