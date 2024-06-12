import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { DemissionAddComponent } from 'src/app/Demission/demission-add/demission-add.component';
import { CongeAddComponent } from 'src/app/Conge/conge-add/conge-add.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  profile: any; 
  updatedProfile: any;

  constructor(private userService: UserService, private dialog: MatDialog, private toastr: ToastrService,private employeeService: EmployeeService) { }

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

  updateProfile(): void {
    this.userService.updateProfile(this.updatedProfile).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
        
        this.getProfile();
       this.toastr.success('Alert', 'Profile updated successfully');

      },
      (error) => {
        console.error('Failed to update profile:', error);
        this.toastr.error('Error', 'Failed to update profile');

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


  viewReport(): void {
    
    this.employeeService.getEmployeeReportForUser().subscribe(
      (response: Blob) => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
      },
      (error) => {
        console.error('Error fetching employee report:', error);
        
      }
    );
  }

  creerDemission(): void {
    const dialogRef = this.dialog.open(DemissionAddComponent, {
      width: '30%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
     
    });
  }

  creerConge(): void {
    const dialogRef = this.dialog.open(CongeAddComponent, {
      width: '30%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
     
    });
  }

}
