import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemissionService } from '../demission.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-demission-add',
  templateUrl: './demission-add.component.html',
  styleUrls: ['./demission-add.component.scss']
})
export class DemissionAddComponent implements OnInit {
  demissionForm: FormGroup;

  constructor(
    private fb: FormBuilder,private dialogRef: MatDialogRef<DemissionAddComponent>,
    private demissionService: DemissionService,
    private toastr: ToastrService
  ) {
    this.demissionForm = this.fb.group({
      motif: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.demissionForm.valid) {
      this.demissionService.creerDemandeDémission(this.demissionForm.value).subscribe({
        next: (res) => {
          this.toastr.success('Your demission request has been submitted.');
          this.dialogRef.close(true);
          
        },
        error: (err) => {
          this.toastr.error('An error occurred: ' + err.message);
          this.dialogRef.close(true);
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close(true);
  }
}
