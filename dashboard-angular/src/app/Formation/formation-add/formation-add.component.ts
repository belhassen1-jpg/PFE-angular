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
  formationData: any = {}; 
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
        this.formationData = {}; 
        this.dialogRef.close(true); 
      },
      (error) => {
        console.error(error);
        this.toastr.error('Error adding formation session', 'Please verify your details and try again');
        this.dialogRef.close(false); 
      }
    );
  }
}

