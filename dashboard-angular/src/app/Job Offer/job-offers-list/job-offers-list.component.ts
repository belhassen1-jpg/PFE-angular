import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobofferService } from '../joboffer.service';
import { JobOffersAddComponent } from '../job-offers-add/job-offers-add.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { JobOfferUpdateComponent } from '../job-offer-update/job-offer-update.component';

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit {

  joboffers: any[] = [];
  originalJobOffers: any[] = []; 
  searchCriteria: string = 'title';
  searchTerm: string = '';


  constructor(private jobofferService: JobofferService, private router: Router,
     private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllJobOffers();
  }

  getAllJobOffers(): void {
    this.jobofferService.getAllJobOffers().subscribe(
      (data: any) => {
        this.joboffers = data; 
        this.originalJobOffers = data; 
        console.log('Job Offers:', this.joboffers); 
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.joboffers = this.originalJobOffers.slice(); 
      return;
    }
  
    this.joboffers = this.originalJobOffers.filter((application) => {
      if (this.searchCriteria === 'title') {
        return application.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      } else if (this.searchCriteria === 'category') {
        return application.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
      else if (this.searchCriteria === 'location') {
        return application.location.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
    });
  }
  
  clearSearch(): void {
    
    this.searchTerm = '';
    this.joboffers = this.originalJobOffers.slice(); 
  }

  showDetails(jobOffer: any): void {
    this.router.navigate(['/dashboard/joboffersdetails',  jobOffer['id']]);
  }

  addJobOffeer(): void {
    const dialogRef = this.dialog.open(JobOffersAddComponent, {
      width: '30%',
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllJobOffers();
      }
    });
  }
  
  updateJobOffer(jobOffer: any): void {
    const dialogRef = this.dialog.open(JobOfferUpdateComponent, {
      width: '30%',
      data: jobOffer,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllJobOffers();
      }
    });
  }

  deleteJobOffer(jobOfferId: number): void {
    if (confirm('Are you sure you want to delete this Job Offer?')) {
      this.jobofferService.deleteJobOffer(jobOfferId).subscribe(
        (response) => {
          this.getAllJobOffers();
          this.toastr.success('Alert', 'Job Offer deleted');
        },
        (error) => {
          // Handle error
          this.toastr.error('Alert', 'Job Offer is not deleted');
        }
      );
    }
  }


  viewApplications(jobOfferId: number): void {
    this.router.navigate(['/dashboard/joboffer-applications', jobOfferId]);
  }

}
