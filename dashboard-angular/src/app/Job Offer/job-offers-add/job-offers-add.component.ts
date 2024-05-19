import { Component } from '@angular/core';
import { JobofferService } from '../joboffer.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-job-offers-add',
  templateUrl: './job-offers-add.component.html',
  styleUrls: ['./job-offers-add.component.scss']
})
export class JobOffersAddComponent {

  newJobOffer: any = {}; // Object to store the new job offer data

  constructor(
    private jobOfferService: JobofferService, 
    private toastr: ToastrService, private dialogRef: MatDialogRef<JobOffersAddComponent>
  ) {}
  
  addJobOffer(): void {
    // Split the keywords string into an array
    this.newJobOffer.keywords = this.newJobOffer.keywords.split(',');
    this.jobOfferService.addJobOffer(this.newJobOffer).subscribe(
      (response) => {
        console.log("Job offer added");
        this.dialogRef.close(true);
        this.toastr.success('Success', 'Job offer added successfully');
      },
      (error) => {
        console.error('Error adding job offer:', error);
        this.toastr.error('Error', 'Failed to add job offer');
      }
    );
  }
}
