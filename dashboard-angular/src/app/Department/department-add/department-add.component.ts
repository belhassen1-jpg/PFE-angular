import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent {
  newDep: any = {}; 

  constructor(
    private dialogRef: MatDialogRef<DepartmentAddComponent>,
    private depservice: DepartmentService
  ) {}

  addDep(): void {
    this.depservice.createDep(this.newDep).subscribe(
      (response) => {
        this.dialogRef.close(true);
      },
      (error) => {
      
      }
    );
  }
}
