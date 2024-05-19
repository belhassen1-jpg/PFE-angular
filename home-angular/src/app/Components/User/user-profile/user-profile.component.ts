import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: any; // Change this type based on your actual profile structure
  updatedProfile: any;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.userService.getProfile().subscribe(
      (response) => {
        this.profile = response;
        // Copy the profile properties to updatedProfile
        this.updatedProfile = { ...this.profile };
      },
      (error) => {
        console.error('Failed to get profile:', error);
      }
    );
  }

  updateProfile(): void {
    this.userService.updateProfile(this.updatedProfile).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
        // Optionally, reload the updated profile after a successful update
        this.getProfile();
       this.toastr.success('Alert', 'Profile updated successfully');

      },
      (error) => {
        console.error('Failed to update profile:', error);
        this.toastr.error('Error', 'Failed to update profile');

      }
    );
  }

  // viewReport(): void {
  //   // Assuming you have a method in your employee service to fetch the report
  //   this.employeeService.getEmployeeReportForUser().subscribe(
  //     (response: Blob) => {
  //       const file = new Blob([response], { type: 'application/pdf' });
  //       const fileURL = URL.createObjectURL(file);
  //       window.open(fileURL, '_blank');
  //     },
  //     (error) => {
  //       console.error('Error fetching employee report:', error);
  //       // Handle error
  //     }
  //   );
  // }
}
