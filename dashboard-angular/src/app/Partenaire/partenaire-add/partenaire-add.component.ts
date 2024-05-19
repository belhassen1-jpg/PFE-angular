import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-partenaire-add',
  templateUrl: './partenaire-add.component.html',
  styleUrls: ['./partenaire-add.component.scss']
})
export class PartenaireAddComponent {
  newPartner: any = {}; // Object to store the new job offer data

  constructor(
    private partenaireService: PartenaireService, 
    private toastr: ToastrService, private dialogRef: MatDialogRef<PartenaireAddComponent>
  ) {}
  
  addPartenaire(): void {
    
    this.partenaireService.addPartner(this.newPartner).subscribe(
      (response) => {
        console.log("Partenaire added");
        this.dialogRef.close(true);
        this.toastr.success('Success', 'Partenaire added successfully');
      },
      (error) => {
        console.error('Error adding Partenaire:', error);
        this.toastr.error('Error', 'Failed to add Partenaire');
      }
    );
  }
}
