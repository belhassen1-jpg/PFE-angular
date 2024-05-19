import { Component, Inject, OnInit } from '@angular/core';
import { ConventionService } from '../convention.service';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-convention-participant-list',
  templateUrl: './convention-participant-list.component.html',
  styleUrls: ['./convention-participant-list.component.scss']
})
export class ConventionParticipantListComponent implements OnInit {
  empId: number;
  conventions: any[] = [];

  constructor(
    private conventionService: ConventionService, 
    private employeService: EmployeeService,
    public dialogRef: MatDialogRef<ConventionParticipantListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { conventionId: number }
  ) { }

  ngOnInit(): void {
    console.log(this.data.conventionId)
    this.loadConventions();
  }

  loadConventions(): void {
    this.conventionService.getAllConventions().subscribe(
      (response) => {
        this.conventions = response;
        console.log('Convention',this.conventions)
      },
      (error) => {
        console.log(error)
      }
    );
  }

  closeDialog(): void {
    this.dialogRef.close(false); // Signal cancellation and close dialog
  }
}
