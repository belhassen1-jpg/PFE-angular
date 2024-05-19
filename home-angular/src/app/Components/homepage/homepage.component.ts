import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let userRole = localStorage.getItem('userRole');
    const userId = localStorage.getItem('userId');
    let username = localStorage.getItem('username');

    console.log(userRole,username,userId);
  }

}
