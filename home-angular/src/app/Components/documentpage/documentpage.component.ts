import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentpage',
  templateUrl: './documentpage.component.html',
  styleUrls: ['./documentpage.component.css']
})
export class DocumentpageComponent implements OnInit {

  documents = [
    { title: 'Passport', name: 'John', lastName: 'Doe', sex: 'Male', date: '01/01/1990', passportNumber: '123456', nationality: 'US' },
    { title: 'Visa', name: 'Jane', lastName: 'Doe', sex: 'Female', date: '02/02/1995', passportNumber: '789012', nationality: 'UK' },
    { title: 'Residence Permit', name: 'Alice', lastName: 'Smith', sex: 'Female', date: '03/03/1985', passportNumber: '345678', nationality: 'Canada' }
  ];

  selectedDocument: any;
  isTableVisible = false;

  showDetails(document: any) {
    this.selectedDocument = document;
    this.isTableVisible = true;
  }
  hideTable() {
    this.isTableVisible = false; // Cache le tableau
  }
  constructor() { }

  ngOnInit(): void {
  }

}
