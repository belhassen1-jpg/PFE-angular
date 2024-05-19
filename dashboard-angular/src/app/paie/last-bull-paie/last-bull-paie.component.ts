import { Component } from '@angular/core';
import { PaieService } from '../paie.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BullPaieAddComponent } from '../bull-paie-add/bull-paie-add.component';

@Component({
  selector: 'app-last-bull-paie',
  templateUrl: './last-bull-paie.component.html',
  styleUrls: ['./last-bull-paie.component.scss']
})
export class LastBullBullPaieComponent {
  bullpaie: any;

  constructor(private paieService: PaieService, private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
      this.getLastBullPaie(empId);
    });
  }

  getLastBullPaie(empId: number): void {
    this.paieService.obtenirDernierBulletinPaie(empId).subscribe(
      (data) => {
        this.bullpaie = data;
      },
      (error) => {
        console.error('Error fetching financial analysis:', error);
      }
    );
  }


  addBullPaie(): void {
    this.route.params.subscribe(params => {
      const empId = params['id'];
    const dialogRef = this.dialog.open(BullPaieAddComponent, {
      width: '30%',
      data: { empId }
      // height: '80%',
      // position: { top: '10%', left: '30%' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.route.params.subscribe(params => {
          const empId = params['id'];
          this.getLastBullPaie(empId);
        });
      }
    });
  });
  }
}
