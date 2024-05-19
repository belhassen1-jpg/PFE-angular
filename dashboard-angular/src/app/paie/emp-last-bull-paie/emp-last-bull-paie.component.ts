import { Component } from '@angular/core';
import { PaieService } from '../paie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-last-bull-paie',
  templateUrl: './emp-last-bull-paie.component.html',
  styleUrls: ['./emp-last-bull-paie.component.scss']
})
export class EmpLastBullPaieComponent {
  bullpaie: any;

  constructor(private paieService: PaieService, private dialog: MatDialog) { }

  ngOnInit(): void {

      this.getLastBullPaie();
  }

  getLastBullPaie(): void {
    this.paieService.getLastBullPaieForUser().subscribe(
      (data) => {
        this.bullpaie = data;
      },
      (error) => {
        console.error('Error fetching financial analysis:', error);
      }
    );
  }


}
