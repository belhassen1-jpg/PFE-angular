import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../job-application.service';
import { MatDialog } from '@angular/material/dialog';
import { JobApplicationUpdateComponent } from '../job-application-update/job-application-update.component';
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
  this.jobApplicationService.getAllJobApplications().subscribe(
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
    
    this.jobApplications = this.originalJobApplications.slice(); // Use slice to create a copy
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
  
  this.searchTerm = '';
  this.jobApplications = this.originalJobApplications.slice(); // Reset to original list
}

  openUpdateDialog(application: any): void {
    const dialogRef = this.dialog.open(JobApplicationUpdateComponent, {
      width: '30%',
      data: application
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      
      }
    });
  }

  downloadResume(jobApplicationId: number): void {
    this.jobApplicationService.downloadResume(jobApplicationId).subscribe(
      (blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        
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
