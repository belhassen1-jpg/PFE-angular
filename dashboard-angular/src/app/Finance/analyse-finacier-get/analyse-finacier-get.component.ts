import { Component } from '@angular/core';
import { FinanceService } from '../finance.service';

@Component({
  selector: 'app-analyse-finacier-get',
  templateUrl: './analyse-finacier-get.component.html',
  styleUrls: ['./analyse-finacier-get.component.scss']
})
export class AnalyseFinacierGetComponent {
  analyse: any;

  constructor(private financeService: FinanceService) { }

  ngOnInit(): void {
    this.fetchAnalyseFinanciere();
  }

  fetchAnalyseFinanciere(): void {
    this.financeService.getAnalyseFinanciereForCurrentUser().subscribe(
      (data) => {
        this.analyse = data;
      },
      (error) => {
        console.error('Error fetching financial analysis:', error);
      }
    );
  }
}
