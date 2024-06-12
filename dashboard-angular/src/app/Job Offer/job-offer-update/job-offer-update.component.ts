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
  updatedJobOffer: any = {}; 
  @Input() data: any;

  constructor(
    private dialogRef: MatDialogRef<JobOfferUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) private dialogData: any,
    private jobOfferService: JobofferService, private toastr: ToastrService
  ) {
   }

   ngOnInit(): void {
    this.data = { ...this.dialogData };
  }

  updateJobOffer(): void {
  
    this.jobOfferService.updateJobOffer(this.data.id, this.data).subscribe(
      (response) => {
     
        console.log("Job offer updated successfully:", response);
        this.dialogRef.close(true); 
        this.toastr.success('Alert', 'Job Offer Updated');
      },
      (error) => {
        
        console.error("Error updating job offer:", error);
        this.toastr.error('Alert', 'Job Offer is not updated');
      }
    );
  }
}
