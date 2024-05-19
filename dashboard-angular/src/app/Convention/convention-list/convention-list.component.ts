import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { ConventionService } from '../convention.service';
import { ConventionAddComponent } from '../convention-add/convention-add.component';
import { ConventionDeleteEmployeeComponent } from '../convention-delete-employee/convention-delete-employee.component';
import { ConventionParticipantListComponent } from '../convention-participant-list/convention-participant-list.component';


@Component({
  selector: 'app-convention-list',
  templateUrl: './convention-list.component.html',
  styleUrls: ['./convention-list.component.scss']
})
export class ConventionListComponent implements OnInit {
  conventions: any[] = [];
  pagedConventions: any[] = [];
  pageSize = 3;
  pageIndex = 0;
  originalConventions: any[] = [];
  searchCriteria: string = 'nom'; // Default search criteria, adjust as necessary
  searchTerm: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private conventionService: ConventionService, 
    private dialog: MatDialog, 
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadConventionsAndParticipants();
  }
  
  loadConventionsAndParticipants(): void {
    this.conventionService.getAllConventions().subscribe(
      (data: any[]) => {
        this.conventions = data;
        this.originalConventions = data; // Store the original list
        this.updatePagedConventions();
      },
      (error) => {
        console.error('Error fetching conventions:', error);
        this.toastr.error('Error loading conventions');
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.pagedConventions = this.originalConventions.slice();
      return;
    }
    this.pagedConventions = this.originalConventions.filter((convention) => {
      if (this.searchCriteria === 'nom') {
        return convention.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.applyFilter();
  }

  onPageChange(Convention: PageEvent): void {
    this.pageSize = Convention.pageSize;
    this.pageIndex = Convention.pageIndex;
    this.updatePagedConventions();
  }

  updatePagedConventions(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedConventions = this.conventions.slice(startIndex, endIndex);
  }

  addConvention(): void {
    const dialogRef = this.dialog.open(ConventionAddComponent , {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadConventionsAndParticipants();
      }
    });
  }

  deleteConvention(conventionId: number): void {
    const dialogRef = this.dialog.open(ConventionDeleteEmployeeComponent, {
      width: '30%',
      data: { conventionId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadConventionsAndParticipants();
      }
    });
  }

  
  ViewConventionParticipants(conventionId: number): void {
    const dialogRef = this.dialog.open(ConventionParticipantListComponent, {
      width: '30%',
      data: { conventionId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.loadConventionsAndParticipants();
      }
    });
  }

}

