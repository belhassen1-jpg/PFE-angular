import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PlanningService } from '../planning.service';
@Component({
  selector: 'app-feuille-temps-add',
  templateUrl: './feuille-temps-add.component.html',
  styleUrls: ['./feuille-temps-add.component.scss']
})
export class FeuilleTempsAddComponent {
 
  FeuilleTempsData: any = {};
  planningId: number;
  plannings: any[] = [];
  @ViewChild('picker', { static: true }) picker: any;


  constructor(private dialogRef: MatDialogRef<FeuilleTempsAddComponent>,
              private toastr: ToastrService,
              private planningService: PlanningService) {
    
  }

  ngOnInit(): void {
    this.loadPlannings();
  }

  loadPlannings(): void {
    this.planningService.getAllPlanningsWithDetails().subscribe(
      (response) => {
        this.plannings = response;
      },
      (error) => {
        // Handle error
      }
    );
  }

  onSubmit(): void {

      this.planningService.createAndAssociateFeuilleTemps(this.planningId, this.FeuilleTempsData).subscribe({
        next: (res) => {
          console.log('FeuilleTemps created successfully:', res);
          this.dialogRef.close(true);
          this.toastr.success('FeuilleTemps Added Successfully');
        },
        error: (err) => {
          console.error('Error creating FeuilleTemps:', err);
          this.toastr.error('Error occurred while adding FeuilleTemps');
        }
      });
    
  }
}
