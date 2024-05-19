import { Component } from '@angular/core';
import { PaieService } from '../paie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-last-paie',
  templateUrl: './emp-last-paie.component.html',
  styleUrls: ['./emp-last-paie.component.scss']
})
export class EmpLastPaieComponent {
  paie: any;

  constructor(private paieService: PaieService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getLastPaie();
  }

  getLastPaie(): void {
    this.paieService.getLastPaieForUser().subscribe(
      (data) => {
        this.paie = data;
      },
      (error) => {
        console.error('Error fetching financial analysis:', error);
      }
    );
  }
}
