import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventAcceptParticipateComponent } from '../event-accept-participate/event-accept-participate.component';

@Component({
  selector: 'app-event-demande-participation-list',
  templateUrl: './event-demande-participation-list.component.html',
  styleUrls: ['./event-demande-participation-list.component.scss']
})
export class EventDemandeParticipationListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'status','actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private eventService: EventService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllEventsDemandes();
  }
  

  getAllEventsDemandes(): void {
    this.eventService.getAllEventsDemandes().subscribe({
      next: (res) => {
        console.log('Event Demandes:', res);

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (res) => {
        alert('Error while showing dep lists');
      },
    });
  }

  validateDemandeEvent(eventDemandeId: number): void {
    const dialogRef = this.dialog.open(EventAcceptParticipateComponent, {
      width: '30%',
      data: { eventDemandeId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllEventsDemandes();
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
