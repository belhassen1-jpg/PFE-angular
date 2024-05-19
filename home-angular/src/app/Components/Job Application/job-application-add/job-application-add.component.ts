import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobApplicationService } from '../job-application.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-application-add',
  templateUrl: './job-application-add.component.html',
  styleUrls: ['./job-application-add.component.scss']
})
export class JobApplicationAddComponent {
  jobApplication: any = {}; // Object to store the job application data
  
  resumeFile: File | null = null; // Variable to store resume file
  coverLetterFile: File | null = null; // Variable to store cover letter file

  applicantName: string = '';
  applicantEmail: string = '';
  applicantPhone: string = '';
  applicantAddress: string = '';
  yearsOfExperience: number | null = null;


  constructor(
    private dialogRef: MatDialogRef<JobApplicationAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject the data passed from the dialog open method
    private jobApplicationService: JobApplicationService,
    private toastr: ToastrService
  ) {}

  onFileChange(event: any, fileType: string): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (fileType === 'resume') {
        this.resumeFile = file;
      } else if (fileType === 'coverLetter') {
        this.coverLetterFile = file;
      }
    }
  }

  submitApplication(): void {
    // Create FormData object to send files along with other form data
    const formData = new FormData();
    formData.append('jobOfferId', this.data.jobOfferId);
    formData.append('userId', this.data.userId);
    formData.append('applicantName', this.applicantName);
    formData.append('applicantEmail', this.applicantEmail);
    formData.append('applicantPhone', this.applicantPhone);
    formData.append('applicantAddress', this.applicantAddress);
    
    if (this.yearsOfExperience !== null) {
      formData.append('yearsOfExperience', this.yearsOfExperience.toString());
    }
    
    // Append resume file if it exists
    if (this.resumeFile) {
      formData.append('resume', this.resumeFile);
    }
    
    // Append cover letter file if it exists
    if (this.coverLetterFile) {
      formData.append('coverLetter', this.coverLetterFile);
    }
    // Append other form fields as needed

    this.jobApplicationService.submitApplication(formData).subscribe(
      (response) => {
        console.log("Job application submitted successfully:", response);
        this.dialogRef.close(true); // Close the dialog
        this.toastr.success('Alert', 'Job Application Submitted');
      },
      (error) => {
        console.error("Error submitting job application:", error);
        this.toastr.error('Alert', 'Job Application is not submitted');
      }
    );
  }

}
