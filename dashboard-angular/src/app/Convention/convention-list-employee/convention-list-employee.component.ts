import { Component } from '@angular/core';
import { ConventionService } from '../convention.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConventionParticipateComponent } from '../convention-participate/convention-participate.component';

@Component({
  selector: 'app-convention-list-employee',
  templateUrl: './convention-list-employee.component.html',
  styleUrls: ['./convention-list-employee.component.scss']
})
export class ConventionListEmployeeComponent {
  conventions: any[] = [];
  pagedConventions: any[] = []; // Array to store conventions for current page
  pageSize = 3; // Number of conventions per page
  pageIndex = 0; // Current page index
  originalConventions: any[] = []; // Store the original list
  searchCriteria: string = 'nom'; // Based on 'title' in Convention, adapted for conventions
  searchTerm: string = '';

  constructor(private conventionService: ConventionService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadConventionsAndParticipants();
  }

  loadConventionsAndParticipants(): void {
    this.conventionService.getAllConventions().subscribe(
      (data: any[]) => {
        this.conventions = data;
        this.originalConventions = data; // Store the original list
        this.updatePagedConventions();
        console.log('Conventions with Participants:', this.conventions);
      },
      (error) => {
        console.error('Error fetching conventions:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.pagedConventions = this.originalConventions.slice(); // Use slice to create a copy
      return;
    }

    // Filter conventions based on searchCriteria and searchTerm
    this.pagedConventions = this.originalConventions.filter((convention) => {
      if (this.searchCriteria === 'nom') {
        return convention.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
      } else if (this.searchCriteria === 'partenaire nom') {
        return convention.partenaire.nom.toLowerCase().includes(this.searchTerm.toLowerCase());
      }
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.pagedConventions = this.originalConventions.slice(); // Reset to original list
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedConventions();
  }

  updatePagedConventions(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedConventions = this.conventions.slice(startIndex, endIndex);
  }

  participateInConvention(conventionId: number): void {
    const dialogRef = this.dialog.open(ConventionParticipateComponent, {
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
