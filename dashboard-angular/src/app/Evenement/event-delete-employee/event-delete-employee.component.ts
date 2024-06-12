import { Component, Inject, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-event-delete-employee',
  templateUrl: './event-delete-employee.component.html',
  styleUrls: ['./event-delete-employee.component.scss']
})
export class EventDeleteEmployeeComponent implements OnInit {
  empId: number;
  events: any[] = [];

  constructor(
    private eventService: EventService, private employeService: EmployeeService,
    public dialogRef: MatDialogRef<EventDeleteEmployeeComponent>,
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
      }
    );
  }

  deleteEmployeeFromEvent(): void {
    const eventId = this.data.eventId;
    this.eventService.deleteEmployeeFromEvent(eventId, this.empId).subscribe(
      () => {
        console.log('Employee deleted from event successfully.');
        this.dialogRef.close(true); 
      },
      (error) => {
        console.error('Error deleting employee from event:', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); // Signal cancellation and close dialog
  }

}
