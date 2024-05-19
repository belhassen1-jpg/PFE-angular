import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../formation.service';
import { FormationParticipateComponent } from '../formation-participate/formation-participate.component';

@Component({
  selector: 'app-formation-list-employe',
  templateUrl:'./formation-list-employe.component.html',
  styleUrls: ['./formation-list-employe.component.scss']
})
export class FormationListEmployeeComponent implements OnInit  {
  formations: any[] = [];
  pagedFormations: any[] = [];
  pageSize = 3;
  pageIndex = 0;
  originalFormations: any[];
  searchCriteria = 'title';
  searchTerm = '';
  NumberOfformationsParticipated: number;

  constructor(
    private formationService: FormationService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loadFormations();
    this.fetchNumberOfformationsParticipated();
  }

  loadFormations(): void {
    this.formationService.getAllFormations().subscribe(
      data => {
        this.formations = data;
        this.originalFormations = data;
        this.updatePagedFormations();
        console.log('Formations with Participants:', this.formations);
      },
      error => {
        console.error('Error fetching formations:', error);
        this.toastr.error('Error loading formations.');
      }
    );
  }

  fetchNumberOfformationsParticipated(): void {
    this.formationService.obtenirNombreFormationsParticipesForUser().subscribe(
      (count: number) => {
        this.NumberOfformationsParticipated = count;
      },
      (error) => {
        console.error('Error fetching number of events:', error);
      }
    );
  }

  applyFilter(): void {
    if (this.searchTerm.trim() === '') {
      this.pagedFormations = this.originalFormations.slice();
      return;
    }
    this.pagedFormations = this.originalFormations.filter(formation =>
      formation.intitule.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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
    this.pagedFormations = this.formations.slice(startIndex, endIndex);  }

  participateInFormation(sessionId: number): void {
    const dialogRef = this.dialog.open(FormationParticipateComponent, {
      width: '30%',
      data: { sessionId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFormations();
      }
    });
  }
}
