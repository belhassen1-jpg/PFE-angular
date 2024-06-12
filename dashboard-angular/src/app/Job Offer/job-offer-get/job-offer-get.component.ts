import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobofferService } from '../joboffer.service';
import { JobApplicationService } from 'src/app/Job Application/job-application.service';
import { JobApplicationAddComponent } from 'src/app/Job Application/job-application-add/job-application-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-offer-get',
  templateUrl: './job-offer-get.component.html',
  styleUrls: ['./job-offer-get.component.scss']
})
export class JobOfferGetComponent implements OnInit {

  jobOffer: any;
  userId: any;

  constructor(
    private route: ActivatedRoute,public dialog: MatDialog,
    private jobOfferService: JobofferService, private jobApplicationService: JobApplicationService
  ) { 
    this.userId  = localStorage.getItem('userId');

  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getJobOfferDetails(id);
  }

  getJobOfferDetails(id: number): void {
    this.jobOfferService.getJobOfferById(id).subscribe(
      (data: any) => {
        this.jobOffer = data; 
      },
      (error) => {
        console.error('Error fetching job offer details:', error);
      }
    );
  }

  openApplicationDialog(): void {
    const dialogRef = this.dialog.open(JobApplicationAddComponent, {
      width: '30%',
      data: { jobOfferId: this.jobOffer.id, userId: this.userId } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}