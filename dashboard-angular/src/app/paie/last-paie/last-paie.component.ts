import { Component } from '@angular/core';
import { PaieService } from '../paie.service';
import { ActivatedRoute } from '@angular/router';
import { PaieAddComponent } from '../paie-add/paie-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-last-paie',
  templateUrl: './last-paie.component.html',
  styleUrls: ['./last-paie.component.scss']
})
export class LastPaieComponent {
  paie: any;

  constructor(private paieService: PaieService, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
      this.getLastPaie(empId);
    });
  }

  getLastPaie(empId: number): void {
    this.paieService.obtenirDernierePaie(empId).subscribe(
      (data) => {
        this.paie = data;
      },
      (error) => {
        console.error('Error fetching financial analysis:', error);
      }
    );
  }


  addPaie(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
    const dialogRef = this.dialog.open(PaieAddComponent, {
      width: '30%',
      data: { empId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.params.subscribe(params => {
          const empId = params['id'];
          this.getLastPaie(empId);
        });
      }
    });
  });
  }
}
