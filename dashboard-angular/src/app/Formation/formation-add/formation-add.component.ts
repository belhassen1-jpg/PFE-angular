import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-formation-add',
  templateUrl: './formation-add.component.html',
  styleUrls: ['./formation-add.component.scss']
})
export class FormationAddComponent {
  formationData: any = {}; // Initialize an empty object for formation data
  @ViewChild('picker', { static: true }) picker: any;

  constructor(
    private toastr: ToastrService,
    private dialogRef: MatDialogRef<FormationAddComponent>,
    private formationService: FormationService
  ) { }

  ngOnInit(): void {
  }

  addFormation(): void {
    this.formationService.creerSessionFormation(this.formationData).subscribe(
      (response) => {
        console.log("Formation session added");
        this.toastr.success('Formation session added successfully');
        this.formationData = {}; // Reset the form
        this.dialogRef.close(true); // Close the dialog on success
      },
      (error) => {
        console.error(error);
        this.toastr.error('Error adding formation session', 'Please verify your details and try again');
        this.dialogRef.close(false); // Optionally, keep the dialog open if there was an error
      }
    );
  }
}

