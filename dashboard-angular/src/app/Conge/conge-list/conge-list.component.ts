import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CongeService } from '../conge.service';
import { MatDialog } from '@angular/material/dialog';
import { StatusEditDialogComponent } from '../status-edit-dialog/status-edit-dialog.component';

@Component({
  selector: 'app-conge-list',
  templateUrl: './conge-list.component.html',
  styleUrls: ['./conge-list.component.scss']
})
export class CongeListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'dateDebut', 'dateFin', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private congeService: CongeService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDemandes();
  }

  loadDemandes() {
    this.congeService.getAllDemandesConge().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      console.log(data)
    });
  }

  editStatus(demande: any): void {
    const dialogRef = this.dialog.open(StatusEditDialogComponent, {
      width: '250px',
      data: { demandeId: demande.id, currentStatus: demande.statut, empId: demande.employe.empId }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.loadDemandes(); 
      }
    });
  }
  
  deleteDemande(id: number) {
    this.congeService.deleteDemandeConge(id).subscribe(() => {
      this.loadDemandes();
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
