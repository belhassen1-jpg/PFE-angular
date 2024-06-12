import { Component, OnInit, ViewChild } from '@angular/core';
import { DemissionService } from '../demission.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-demission-list',
  templateUrl: './demission-list.component.html',
  styleUrls: ['./demission-list.component.css']
})
export class DemissionListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'title', 'motif', 'status', 'dateDemande', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private demissionService: DemissionService, private dialog: MatDialog, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllDemissionDemandes();
  }
  
  getAllDemissionDemandes(): void {
    this.demissionService.getAllDemandeDemissions().subscribe({
      next: (res) => {
        console.log('Demission Demandes:', res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        this.toastr.error('Error while fetching demission demandes');
      },
    });
  }

  validateDemission(demissionId: number): void {
    this.demissionService.traiterDemandeDémission(demissionId, true).subscribe({
      next: () => {
        this.toastr.success('Demission request accepted');
        this.getAllDemissionDemandes(); 
      },
      error: () => {
        this.toastr.error('Error while accepting demission request');
      }
    });
  }
  

  rejectDemission(demissionId: number): void {
    this.demissionService.traiterDemandeDémission(demissionId, false).subscribe({
      next: () => {
        this.toastr.success('Demission request rejected');
        this.getAllDemissionDemandes(); 
      },
      error: () => {
        this.toastr.error('Error while rejecting demission request');
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
