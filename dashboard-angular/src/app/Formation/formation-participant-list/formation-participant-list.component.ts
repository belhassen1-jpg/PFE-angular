import { Component, Inject, OnInit } from '@angular/core';
import { FormationService } from '../formation.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formation-participant-list',
  templateUrl: './formation-participant-list.component.html',
  styleUrls: ['./formation-participant-list.component.scss']
})
export class FormationParticipantListComponent implements OnInit {
  empId: number;
  sessions: any[] = [];
  
  

  constructor(
    private formationService: FormationService,
    public dialogRef: MatDialogRef<FormationParticipantListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { formationId: number }
  ) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions(): void {
    this.formationService.getAllSessionsWithParticipants().subscribe(
      (response) => {
        this.sessions = response;
      },
      (error) => {
        console.error('Error loading sessions with participants:', error);
        // Handle error, e.g., show a message
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(); // Closes the dialog
  }
}
