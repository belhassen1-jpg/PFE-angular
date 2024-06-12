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
  originalJobOffers: any[] = []; 
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
    this.router.navigate(['/joboffersdetails',  jobOffer['id']]);
  }

  
}
