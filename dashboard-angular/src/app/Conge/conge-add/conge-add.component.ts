import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CongeService } from '../conge.service';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-conge-add',
  templateUrl: './conge-add.component.html',
  styleUrls: ['./conge-add.component.scss']
})
export class CongeAddComponent implements OnInit {
  congeForm: FormGroup;
  types = ['ANNUE','MALADIE' , 'SANS_SOLDE']; 

  constructor(
    private fb: FormBuilder,
    private congeService: CongeService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.congeForm = this.fb.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.congeForm.valid) {
      this.congeService.creerDemandeConge(this.congeForm.value).subscribe(
        response => {
          this.toastr.success('Your Congé request has been submitted.');

          console.log('Conge added:', response);
        
        },
        error => {
          this.toastr.error('An error occurred: ' + error.message);

          console.error('Error adding conge:', error);

        }
      );
    }
  }
}
