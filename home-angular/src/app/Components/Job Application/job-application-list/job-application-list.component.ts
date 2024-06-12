import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../job-application.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.scss']
})
export class JobApplicationListComponent implements OnInit {
  jobApplications: any[] = [];
originalJobApplications: any[] = []; 
searchCriteria: string = 'name';
searchTerm: string = '';

constructor(private jobApplicationService: JobApplicationService, private dialog: MatDialog,
  private toastr: ToastrService) { }

ngOnInit(): void {
  this.getJobApplications();
}

getJobApplications(): void {
  this.jobApplicationService.getAllJobApplicationsForUser().subscribe(
    (data: any[]) => {
      this.jobApplications = data;
      this.originalJobApplications = data; 
      console.log('Job Applications:', this.jobApplications);
    },
    (error) => {
      console.error('Error fetching job applications:', error);
    }
  );
}

applyFilter(): void {
  if (this.searchTerm.trim() === '') {
   
    this.jobApplications = this.originalJobApplications.slice(); 
    return;
  }

  
  this.jobApplications = this.originalJobApplications.filter((application) => {
    if (this.searchCriteria === 'name') {
      return application.applicantName.toLowerCase().includes(this.searchTerm.toLowerCase());
    } else if (this.searchCriteria === 'email') {
      return application.applicantEmail.toLowerCase().includes(this.searchTerm.toLowerCase());
    }
  });
}

clearSearch(): void {
  // Clear search term and reset list to show all job applications
  this.searchTerm = '';
  this.jobApplications = this.originalJobApplications.slice(); // Reset to original list
}

  downloadResume(jobApplicationId: number): void {
    this.jobApplicationService.downloadResume(jobApplicationId).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // a.download = 'resume.pdf'; // Change the filename if necessary
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      (error) => {
        console.error('Error downloading resume:', error);
        this.toastr.error('Error downloading resume');
      }
    );
  }

  downloadCoverLetter(jobApplicationId: number): void {
    this.jobApplicationService.downloadCoverLetter(jobApplicationId).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // a.download = 'coverletter.pdf'; // Change the filename if necessary
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      },
      (error) => {
        console.error('Error downloading resume:', error);
        this.toastr.error('Error downloading resume');
      }
    );
  }


}
