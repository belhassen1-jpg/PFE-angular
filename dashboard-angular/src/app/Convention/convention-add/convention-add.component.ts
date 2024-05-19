import { Component, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ConventionService } from '../convention.service';
import { PartenaireService } from 'src/app/Partenaire/partenaire.service';

@Component({
  selector: 'app-convention-add',
  templateUrl: './convention-add.component.html',
  styleUrls: ['./convention-add.component.scss']
})
export class ConventionAddComponent {
  conventionData: any = {}; // Initialize an empty object for convention data
  partenaires: any[] = [];
  @ViewChild('picker', { static: true }) picker: any;

  constructor(
    private toastr: ToastrService, 
    private dialogRef: MatDialogRef<ConventionAddComponent>,
    private partenaireService: PartenaireService, 
    private conventionService: ConventionService) { }

  ngOnInit(): void {
    this.loadPartenaires();
  }

  loadPartenaires(): void {
    this.partenaireService.getPartenaires().subscribe(
      (response) => {
        this.partenaires = response;
      },
      (error) => {
        this.toastr.error('Error loading partners', 'Error');
      }
    );
  }

  addConvention(): void {
    this.conventionService.createConvention(this.conventionData, this.conventionData.partenaireId).subscribe(
      (response) => {
        this.toastr.success('Convention Added Successfully', 'Success');
        this.conventionData = {}; // Reset the form
        this.dialogRef.close(true);
      },
      (error) => {
        this.toastr.error('Please verify your details', 'Error');
        this.dialogRef.close(true);
      }
    );
  }
}
