import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobofferService } from '../joboffer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-offer-update',
  templateUrl: './job-offer-update.component.html',
  styleUrls: ['./job-offer-update.component.scss']
})
export class JobOfferUpdateComponent implements OnInit {
  updatedJobOffer: any = {}; // Object to store the updated job offer data
  @Input() data: any;

  constructor(
    private dialogRef: MatDialogRef<JobOfferUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
    private jobOfferService: JobofferService, private toastr: ToastrService
  ) {
     // Check if keywords is a string before splitting
    // if (typeof this.data.keywords === 'string') {
    //   this.data.keywords = this.data.keywords.split(',');
    // }
   }

   ngOnInit(): void {
    this.data = { ...this.dialogData };
  }

  updateJobOffer(): void {
    // Call the service method to update the job offer with the updated data
    // Split the keywords string into an array
    // this.jobOffer.keywords = this.jobOffer.keywords.split(',');
    this.jobOfferService.updateJobOffer(this.data.id, this.data).subscribe(
      (response) => {
        // Handle success
        console.log("Job offer updated successfully:", response);
        this.dialogRef.close(true); // Close the dialog
        this.toastr.success('Alert', 'Job Offer Updated');
      },
      (error) => {
        // Handle error
        console.error("Error updating job offer:", error);
        this.toastr.error('Alert', 'Job Offer is not updated');
      }
    );
  }
}
