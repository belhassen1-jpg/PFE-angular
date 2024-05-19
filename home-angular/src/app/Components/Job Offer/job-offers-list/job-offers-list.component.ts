import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobofferService } from '../joboffer.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-offers-list',
  templateUrl: './job-offers-list.component.html',
  styleUrls: ['./job-offers-list.component.scss']
})
export class JobOffersListComponent implements OnInit {

  joboffers: any[] = [];
  originalJobOffers: any[] = []; // Store the original list
  searchCriteria: string = 'title';
  searchTerm: string = '';


  constructor(private jobofferService: JobofferService, private router: Router,
     private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllJobOffers();
  }

  getAllJobOffers(): void {
    this.jobofferService.getAllJobOffers().subscribe(
      (data: any) => {
        this.joboffers = data; // Assuming the API returns an array of job offers
        this.originalJobOffers = data; // Store the original list
        console.log('Job Offers:', this.joboffers); // Log the job offers to the console
      },
      (error) => {
        console.error('Error fetching job offers:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      // If search term is empty, show all job applications
      this.joboffers = this.originalJobOffers.slice(); // Use slice to create a copy
      return;
    }
  
    // Filter jobApplications based on searchCriteria and searchTerm
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
    // Clear search term and reset list to show all job applications
    this.searchTerm = '';
    this.joboffers = this.originalJobOffers.slice(); // Reset to original list
  }

  showDetails(jobOffer: any): void {
    this.router.navigate(['/joboffersdetails',  jobOffer['id']]);
  }

  
}
