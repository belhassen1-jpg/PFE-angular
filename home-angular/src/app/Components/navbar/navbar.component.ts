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
   
    return this.userService.isAuthenticatedUser();
  }
logout(): void {
   
    this.userService.logout();
    this.router.navigate(['/login']);
    this.toastr.info('Info', 'User Logged out');
  }

}
