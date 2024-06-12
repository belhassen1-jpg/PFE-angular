import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JobApplicationService } from '../job-application.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-application-update',
  templateUrl: './job-application-update.component.html',
  styleUrls: ['./job-application-update.component.scss']
})
export class JobApplicationUpdateComponent {
  newStatus: string;

  constructor(
    private dialogRef: MatDialogRef<JobApplicationUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public application: any, private toastr: ToastrService,
    private jobApplicationService: JobApplicationService
  ) {}

  updateStatus(): void {
    this.jobApplicationService.updateStatus(this.application.id, this.newStatus)
      .subscribe(
        () => {
          this.dialogRef.close(true); 
        },
        (error) => {
         
          console.error('Error updating status:', error);
          this.toastr.success('Status changed successfully.', 'Alert');
        }
      );
  }
}
