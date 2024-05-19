import { Component, OnInit } from '@angular/core';
import { FormationService } from '../formation.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { FormationAddComponent } from '../formation-add/formation-add.component';
import { FormationParticipateComponent } from '../formation-participate/formation-participate.component';
import { FormationParticipantListComponent } from '../formation-participant-list/formation-participant-list.component';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.scss']
})
export class FormationListComponent implements OnInit {
  formations: any[] = [];
  pagedFormations: any[] = [];
  pageSize = 3;
  pageIndex = 0;
  originalFormations: any[] = [];
  searchCriteria: string = 'intitule'; // Changed from 'title' to match the select options
  searchTerm: string = '';

  constructor(
    private formationService: FormationService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadFormations();
  }

  loadFormations(): void {
    this.formationService.getAllFormations().subscribe(
      (data: any[]) => {
        this.formations = data;
        this.originalFormations = data;
        this.updatePagedFormations();
      },
      (error) => {
        console.error('Error fetching formations:', error);
        this.toastr.error('Error loading formations.');
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.pagedFormations = this.originalFormations.slice();
      return;
    }

    this.pagedFormations = this.originalFormations.filter((formation) => {
      return formation[this.searchCriteria].toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.pagedFormations = this.originalFormations.slice();
  }

  onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePagedFormations();
  }

  updatePagedFormations(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedFormations = this.formations.slice(startIndex, endIndex);
  }

  addFormation(): void {
    const dialogRef = this.dialog.open(FormationAddComponent, { width: '30%' });
    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadFormations();
    });
  }

  deleteFormation(formationId: number): void {
    this.formationService.deleteFormation(formationId).subscribe(
      (response) => {
        this.toastr.success('Formation successfully deleted.');
        this.loadFormations();
      },
      (error) => {
        this.toastr.error('Error deleting formation.');
      }
    );
  }

  viewFormationParticipants(formationId: number): void {
    const dialogRef = this.dialog.open(FormationParticipantListComponent, {
      width: '30%',
      data: { formationId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.loadFormations();
    });
  }
}
