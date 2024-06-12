import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from '../event.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-accept-participate',
  templateUrl: './event-accept-participate.component.html',
  styleUrls: ['./event-accept-participate.component.scss']
})
export class EventAcceptParticipateComponent {
  constructor(
    public dialogRef: MatDialogRef<EventAcceptParticipateComponent>, private toastr: ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: { eventDemandeId: number },
    private eventService: EventService
  ) { }

  confirmValidation(): void {
    const eventDemandeId = this.data.eventDemandeId;
    this.eventService.validateDemandeEvent(eventDemandeId).subscribe(
      () => {
        console.log('Validation successful.');
        this.toastr.success('Validation successful.', 'Alert');
        this.dialogRef.close(true); 
      },
      (error) => {
        console.error('Error validating participation:', error);
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); 
  }
}
