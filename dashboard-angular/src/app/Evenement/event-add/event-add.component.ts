import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../event.service';
import { PartenaireService } from 'src/app/Partenaire/partenaire.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent {
  eventData: any = {}; 
  partenaires: any[] = [];
  @ViewChild('picker', { static: true }) picker: any;

  constructor(private toastr: ToastrService, private dialogRef: MatDialogRef<EventAddComponent>,
    private partenaireService: PartenaireService, private eventService: EventService) { }

  ngOnInit(): void {
    this.loadPartenaires();
  }

  loadPartenaires(): void {
    this.partenaireService.getPartenaires().subscribe(
      (response) => {
        this.partenaires = response;
      },
      (error) => {
        // Handle error
      }
    );
  }


  addEvent(): void {

    this.eventService.createEvenement(this.eventData, this.eventData.partenaireId).subscribe(
      (response) => {
         
        console.log("event added");
        this.toastr.success('Alert', 'Event Added');
        this.eventData = {};
        this.dialogRef.close(true);
      },
      (error) => {
       
        console.log(error);
        this.dialogRef.close(true);
        this.toastr.error('Alert', 'Please Verify your details');
      }
    );
  }
}
