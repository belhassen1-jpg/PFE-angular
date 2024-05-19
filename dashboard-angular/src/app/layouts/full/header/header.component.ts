import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/User/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog, public router: Router,
    private userService: UserService, private toastr: ToastrService) {}


  isAuthenticated(): boolean {
    // Implement the logic to check if the user is authenticated
    return this.userService.isAuthenticatedUser();
  }
logout(): void {
    // Call the logout method from the authentication service
    this.userService.logout();
    this.router.navigate(['/login']);
    this.toastr.info('Info', 'User Logged out');
  }
  
  navigateToProfile() {
    this.router.navigateByUrl('/profile');
  }
}
