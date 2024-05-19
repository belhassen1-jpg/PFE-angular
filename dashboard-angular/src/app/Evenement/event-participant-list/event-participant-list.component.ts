import { Component, Inject, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-participant-list',
  templateUrl: './event-participant-list.component.html',
  styleUrls: ['./event-participant-list.component.scss']
})
export class EventParticipantListComponent  implements OnInit {
  empId: number;
  events: any[] = [];

  constructor(
    private eventService: EventService, private employeService: EmployeeService,
    public dialogRef: MatDialogRef<EventParticipantListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { eventId: number }
  ) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        // Handle error
      }
    );
  }


  closeDialog(): void {
    this.dialogRef.close(false); // Signal cancellation and close dialog
  }
}
