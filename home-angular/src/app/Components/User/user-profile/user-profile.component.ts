import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: any; 
  updatedProfile: any;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.userService.getProfile().subscribe(
      (response) => {
        this.profile = response;
        this.updatedProfile = { ...this.profile };
      },
      (error) => {
        console.error('Failed to get profile:', error);
      }
    );
  }

  updateProfile2(): void {
    if (this.updatedProfile && this.updatedProfile.idUser) {
     
      this.userService.updateUser2(this.updatedProfile.idUser, this.updatedProfile).subscribe(
        (response) => {
          
          this.toastr.success('Profile updated successfully');
          this.getProfile(); // Reload the profile
        },
        (error) => {
        
          this.toastr.error('Failed to update profile');
          console.error('Failed to update profile:', error);
        }
      );
    } else {
 
      this.toastr.error('User ID is required for updating profile');
    }
  }


}
