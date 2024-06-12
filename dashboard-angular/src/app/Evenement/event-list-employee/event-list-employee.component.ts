import { Component } from '@angular/core';
import { EventParticipateComponent } from '../event-participate/event-participate.component';
import { EventService } from '../event.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-list-employee',
  templateUrl: './event-list-employee.component.html',
  styleUrls: ['./event-list-employee.component.scss']
})
export class EventListEmployeeComponent {
  events: any[] = [];
  pagedEvents: any[] = []; // Array to store events for current page
  pageSize = 3; // Number of events per page
  pageIndex = 0; // Current page index
  originalEvents: any[] = []; // Store the original list
  searchCriteria: string = 'title';
  searchTerm: string = '';
  numberOfEventsParticipated: number; // nbr of events an employee participated in

  constructor(private eventService: EventService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadEventsAndParticipants();
    this.fetchNumberOfEventsParticipated();
  }
  

  loadEventsAndParticipants(): void {
    this.eventService.getAllEvents().subscribe(
      (data: any[]) => {
        this.events = data;
        this.originalEvents = data; // Store the original list
        this.updatePagedEvents();
        console.log('Events with Participants:', this.events);
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
  
  fetchNumberOfEventsParticipated(): void {
    this.eventService.getNumberOfEventsForUser().subscribe(
      (count: number) => {
        this.numberOfEventsParticipated = count;
      },
      (error) => {
        console.error('Error fetching number of events:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.pagedEvents = this.originalEvents.slice(); 
      return;
    }
    this.pagedEvents = this.originalEvents.filter((event) => {
      if (this.searchCriteria === 'title') {
        return event.titre.toLowerCase().includes(this.searchTerm.toLowerCase());
      } else if (this.searchCriteria === 'partenaire nom') {
        return event.partenaire.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
    });
  }
  
  clearSearch(): void {
    
    this.searchTerm = '';
    this.pagedEvents = this.originalEvents.slice(); 
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedEvents();
  }

  updatePagedEvents(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedEvents = this.events.slice(startIndex, endIndex);
  }

  participateInEvent(eventId: number): void {
    const dialogRef = this.dialog.open(EventParticipateComponent, {
      width: '30%',
      data: { eventId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEventsAndParticipants();
      }
    });
  }

}
