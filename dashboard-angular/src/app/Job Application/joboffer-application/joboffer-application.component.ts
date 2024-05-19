import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-joboffer-application',
  templateUrl: './joboffer-application.component.html',
  styleUrls: ['./joboffer-application.component.scss']
})
export class JobofferApplicationComponent {

  jobApplications: any[] = [];

  constructor(private route: ActivatedRoute, private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const jobOfferId = params['id'];
      this.getApplicationsForJobOffer(jobOfferId);
    });
  }

  getApplicationsForJobOffer(jobOfferId: number): void {
    this.jobApplicationService.getApplicationsForJobOffer(jobOfferId).subscribe(
      (data: any[]) => {
        this.jobApplications = data;
      },
      (error) => {
        console.error('Error fetching job applications:', error);
      }
    );
  }

}
