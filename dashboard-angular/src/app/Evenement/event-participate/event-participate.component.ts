import { Component, Inject, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-participate',
  templateUrl: './event-participate.component.html',
  styleUrls: ['./event-participate.component.scss']
})
export class EventParticipateComponent {
  userId: number;
  eventId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { eventId: number }, private toastr: ToastrService,
    private eventService: EventService, private dialogRef: MatDialogRef<EventParticipateComponent>,
  ) { }


  confirmParticipation(confirm: boolean): void {
    if (confirm) {
     
      const userId = Number(localStorage.getItem('userId'));
      this.eventService.participateInEvent(userId, this.data.eventId).subscribe(
        (response) => {
       
          console.log('Participation confirmed successfully:', response);
          this.toastr.success('You have been added to the waiting list.', 'Alert');
          this.dialogRef.close(true);
        },
        (error) => {
      
          console.error('Error confirming participation:', error);
          this.dialogRef.close(true);
        }
      );
    } else {
  
      console.log('Participation cancelled.');
    }
  }
}
