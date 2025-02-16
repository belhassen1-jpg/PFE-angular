import { Component, ViewEncapsulation, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexResponsive,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { PartenaireService } from 'src/app/Partenaire/partenaire.service';
import { PlanningService } from 'src/app/Planning/planning.service';
import { StatistiqueService } from 'src/app/Statistique/statistique.service';

interface month {
  value: string;
  viewValue: string;
}

export type PartnerRankingChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

export interface salesOverviewChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
  marker: ApexMarkers;
}

export interface yearlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

export interface monthlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  responsive: ApexResponsive;
}

interface stats {
  id: number;
  time: string;
  color: string;
  title?: string;
  subtext?: string;
  link?: string;
}

export interface productsData {
  id: number;
  imagePath: string;
  uname: string;
  position: string;
  productName: string;
  budget: number;
  priority: string;
}

// ecommerce card
interface productcards {
  id: number;
  imgSrc: string;
  title: string;
  price: string;
  rprice: string;
}

const ELEMENT_DATA: productsData[] = [
  {
    id: 1,
    imagePath: 'assets/images/profile/user-1.jpg',
    uname: 'Sunil Joshi',
    position: 'Web Designer',
    productName: 'Elite Admin',
    budget: 3.9,
    priority: 'low',
  },
  {
    id: 2,
    imagePath: 'assets/images/profile/user-2.jpg',
    uname: 'Andrew McDownland',
    position: 'Project Manager',
    productName: 'Real Homes Theme',
    budget: 24.5,
    priority: 'medium',
  },
  {
    id: 3,
    imagePath: 'assets/images/profile/user-3.jpg',
    uname: 'Christopher Jamil',
    position: 'Project Manager',
    productName: 'MedicalPro Theme',
    budget: 12.8,
    priority: 'high',
  },
  {
    id: 4,
    imagePath: 'assets/images/profile/user-4.jpg',
    uname: 'Nirav Joshi',
    position: 'Frontend Engineer',
    productName: 'Hosting Press HTML',
    budget: 2.4,
    priority: 'critical',
  },
];
interface ChartData {
  name: string;
  data: number[];
  color: string;
}

interface Project {
  id: number;
  nomProjet: string;  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'] 
})
export class AppDashboardComponent implements OnInit {
  public salesOverviewChart: Partial<salesOverviewChart> | any;
  public employeeRankingChart: Partial<any> | any;
  public projects: Project[] = [];
  public staticChartData: Partial<any> | any;
  public selectedProject: string;
  private logoColors = ['#017bff', '#f7358e'];
  public partnerRankingChart: PartnerRankingChart = {
    series: [],
    chart: {
        type: 'bar',
        height: 350
    },
    xaxis: {
        categories: []
    },
    title: {
        align: 'center'
    }
};

  constructor(private cdr: ChangeDetectorRef,private statistiqueService: StatistiqueService,private planningService: PlanningService,private partenaireService: PartenaireService) {}

  ngOnInit(): void {
    this.loadDataForSalesChart();
    this.loadProjects();
    this.loadPartnerRankings();
    this.loadStaticChartData();
  }


  loadStaticChartData(): void {
    this.staticChartData = {
      series: [{
        name: 'Static Data',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yaxis: {
        title: {
          text: 'Value'
        }
      },
      legend: {
        show: true
      }
    };
  }
  
  loadPartnerRankings(): void {
    this.partenaireService.getPartenairesRankedByInvolvement().subscribe({
        next: (data) => {
            if (data && data.length > 0) {
                this.partnerRankingChart.series = [{
                    name: 'Total Participations',
                    data: data.map(item => item.totalParticipations)
                }];
                this.partnerRankingChart.xaxis = {
                    categories: data.map(item => item.nom)
                };
                this.cdr.detectChanges();
                  // Trigger change detection manually
            } else {
                this.partnerRankingChart.series = [];
                this.partnerRankingChart.xaxis = { categories: [] };
                this.partnerRankingChart.title.text = 'No Data Available';
            }
        },
        error: (error) => {
            console.error('Error loading partner rankings:', error);
        }
    });
}


  
  loadProjects(): void {
    this.planningService.getAllPlanningsWithDetails().subscribe({
      next: (data) => {
        this.projects = data;
        // Automatically select the first project initially if projects are available
        if (this.projects.length > 0) {
          this.selectedProject = this.projects[0].nomProjet;
          this.loadEmployeeRankings(this.selectedProject);
        }
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }

  loadEmployeeRankings(projectName: string): void {
    this.planningService.getEmployeeRankingByHours(projectName).subscribe({
      next: (data) => {
        this.employeeRankingChart = {
          series: [{
            name: 'Hours Worked',
            data: data.map(item => item.heuresTravaillees)
          }],
          chart: {
            type: 'bar',
            height: 350
          },
          xaxis: {
            categories: data.map(item => item.nom)
          },   colors: this.logoColors      };
      },
      error: (error) => {
        console.error('Error loading employee rankings:', error);
      }
    });
  }

  onProjectChange(): void {
    this.loadEmployeeRankings(this.selectedProject);
  }


  loadDataForSalesChart(): void {
    this.statistiqueService.getParticipationStatistics().subscribe(
      (data: any) => {
        const seriesData: ChartData[] = [];

        // Process "Events" data
        if (data.Events) {
          const eventIdsAndValues = data.Events;
          const eventValues = Object.values(eventIdsAndValues).map((value: unknown) =>
            Number(value)
          );
          const eventColor = '#5D87FF'; 
          seriesData.push({
            name: 'Events',
            data: eventValues,
            color: eventColor,
          });
        }

        // Process "Conventions" data
        if (data.Conventions) {
          const conventionIdsAndValues = data.Conventions;
          const conventionValues = Object.values(conventionIdsAndValues).map((value: unknown) =>
            Number(value)
          );
          const conventionColor = '#ECF2FF'; 
          seriesData.push({
            name: 'Conventions',
            data: conventionValues,
            color: conventionColor,
          });
        }

        // Process "Formations" data
        if (data.Formations) {
          const formationIdsAndValues = data.Formations;
          const formationValues = Object.values(formationIdsAndValues).map((value: unknown) =>
            Number(value)
          );
          const formationColor = '#49BEFF'; 
          seriesData.push({
            name: 'Formations',
            data: formationValues,
            color: formationColor,
          });
        }

        this.salesOverviewChart = {
          series: seriesData,
          chart: {
            type: 'bar',
            height: 390,
            // Add more chart configuration here as needed
          },
          legend: {
            show: true,
            labels: {
              colors: ['#5D87FF', '#ECF2FF', '#49BEFF'], 
              useSeriesColors: false,
            },
          },
          xaxis: {
            categories: Object.keys(data.Events || {}).map(Number), // Use event IDs as x-axis categories
          },
          
        };
      },
      (error) => {
        console.error('Failed to fetch participation statistics:', error);
      }
    );
  }
}