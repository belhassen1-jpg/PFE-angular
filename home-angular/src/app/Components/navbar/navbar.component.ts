import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

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

}
