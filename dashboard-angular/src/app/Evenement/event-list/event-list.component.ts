import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EventAddComponent } from '../event-add/event-add.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EventParticipateComponent } from '../event-participate/event-participate.component';
import { PageEvent } from '@angular/material/paginator';
import { EventDeleteEmployeeComponent } from '../event-delete-employee/event-delete-employee.component';
import { EventParticipantListComponent } from '../event-participant-list/event-participant-list.component';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  pagedEvents: any[] = []; 
  pageSize = 3; 
  pageIndex = 0; 
  originalEvents: any[] = []; 
  searchCriteria: string = 'title';
  searchTerm: string = '';

  constructor(private eventService: EventService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadEventsAndParticipants();
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

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      // If search term is empty, show all job applications
      this.pagedEvents = this.originalEvents.slice(); // Use slice to create a copy
      return;
    }
  
    // Filter events based on searchCriteria and searchTerm
    this.pagedEvents = this.originalEvents.filter((event) => {
      if (this.searchCriteria === 'title') {
        return event.titre.toLowerCase().includes(this.searchTerm.toLowerCase());
      } else if (this.searchCriteria === 'partenaire nom') {
        return event.partenaire.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
    });
  }
  
  clearSearch(): void {
    // Clear search term and reset list to show all job applications
    this.searchTerm = '';
    this.pagedEvents = this.originalEvents.slice(); // Reset to original list
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


  addEvent(): void {
    const dialogRef = this.dialog.open(EventAddComponent, {
      width: '30%',
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadEventsAndParticipants();
      }
    });
  }


  deleteEventEmployee(eventId: number): void {
    const dialogRef = this.dialog.open(EventDeleteEmployeeComponent, {
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

  
  ViewEventEmployees(eventId: number): void {
    const dialogRef = this.dialog.open(EventParticipantListComponent, {
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