import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlanningService } from '../planning.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-planning-add',
  templateUrl: './planning-add.component.html',
  styleUrls: ['./planning-add.component.scss']
})
export class PlanningAddComponent implements OnInit {

  createPlanningForm: FormGroup;
  employees: any[] = [];

  constructor(private dialogRef: MatDialogRef<PlanningAddComponent>,private toastr: ToastrService,
    private formBuilder: FormBuilder, private planningService: PlanningService, private employeeService: EmployeeService) {
    this.createPlanningForm = this.formBuilder.group({
      nomProjet: ['', Validators.required],
      dateDebutValidite: ['', Validators.required],
      dateFinValidite: ['', Validators.required],
      employeIds: ['', Validators.required] 
    });
  }
  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmpList().subscribe(
      (response) => {
        this.employees = response;
      },
      (error) => {
        // Handle error
      }
    );
  }

  onSubmit(): void {
    if (this.createPlanningForm.valid) {
      const planningData = this.createPlanningForm.value;
      const employeIds = planningData.employeIds; 
      delete planningData.employeIds; 
      this.planningService.createPlanningWithEmployees(planningData, employeIds).subscribe({
        next: (res) => {
          console.log('Planning created successfully:', res);
          this.dialogRef.close(true);
          this.toastr.success('Alert', 'Planning Added');
          this.createPlanningForm.reset();
        },
        error: (err) => {
          console.error('Error creating planning:', err);
          this.toastr.error('Alert', 'Please Verify your details');
        }
      });
    }
  }
  
}
