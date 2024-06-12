import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/Evenement/event.service';
import { EmployeeService } from '../employee.service';
import { PlanningService } from 'src/app/Planning/planning.service';
import { Router } from '@angular/router';
import { CongeService } from 'src/app/Conge/conge.service';
import { FormationService } from 'src/app/Formation/formation.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent {
  selectedEmployee: any; 
  numberOfEventsParticipated: number; 
  numberOfHoursWorked: number; 
  totalJoursConges: number;
  NumberOfformationsParticipated: number;

  reports: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<GetEmployeeComponent>,
  private eventService: EventService,private formationService: FormationService,private router: Router, private congeservice: CongeService,
   private employeeService: EmployeeService, private planningService: PlanningService) {
    this.selectedEmployee = data; // Assign the selected employee data passed from the parent component
    this.fetchNumberOfEventsParticipated();
    this.fetchNumberOfformationsParticipated();
    this.fetchNumberOfHoursWorked();
    this.fetchTotalJoursCongesPourEmploye(); 
    // this.fetchEmployeeReports();
  }

  fetchNumberOfEventsParticipated(): void {
    this.eventService.getNumberOfEventsForEmployee(this.selectedEmployee.empId).subscribe(
      (count: number) => {
        this.numberOfEventsParticipated = count;
      },
      (error) => {
        console.error('Error fetching number of events:', error);
      }
    );
  }

  fetchNumberOfformationsParticipated(): void {
    this.formationService.obtenirNombreFormationsParticipees(this.selectedEmployee.empId).subscribe(
      (count: number) => {
        this.NumberOfformationsParticipated = count;
      },
      (error) => {
        console.error('Error fetching number of events:', error);
      }
    );
  }

  fetchTotalJoursCongesPourEmploye(): void {
    this.congeservice.calculerTotalJoursCongesPourEmploye(this.selectedEmployee.empId).subscribe(
      (totalJours: number) => {
        this.totalJoursConges = totalJours;
      },
      (error) => {
        console.error('Error fetching total days of leave:', error);
      }
    );
  }


  fetchNumberOfHoursWorked(): void {
    this.planningService.getTotalHoursWorkedForEmployee(this.selectedEmployee.empId).subscribe(
      (count: number) => {
        this.numberOfHoursWorked = count;
      },
      (error) => {
        console.error('Error fetching number of events:', error);
      }
    );
  }

  openConfirmDialog(): void {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee\'s events?');
    if (confirmDelete) {
      this.deleteEventsForEmployee(this.selectedEmployee.empId);
    }
  }

  deleteEventsForEmployee(empId: number): void {
    this.eventService.deleteEventsForEmployee(empId).subscribe(
      () => {
        console.log('Events deleted successfully');
      },
      (error) => {
        console.error('Error deleting events:', error);
      }
    );
  }



  viewReport(): void {
    this.employeeService.getEmployeeReport(this.selectedEmployee.empId).subscribe(
      (response: Blob) => {
        const file = new Blob([response], { type: 'application/pdf' });
        const fileURL = URL.createObjectURL(file);
        window.open(fileURL, '_blank');
      },
      (error) => {
        console.error('Error fetching employee report:', error);
        
      }
    );
  }
  
// feuille temps / planning
  viewFeuilleTemps(empId: number): void {
    this.dialogRef.close(true);
    this.router.navigate(['/dashboard/feuille-temps-employee', empId]);
  }

  // paie
  viewLastPaie(empId: number): void {
    this.dialogRef.close(true);
    this.router.navigate(['/dashboard/LastPaie', empId]);
  }

  viewLastBullPaie(empId: number): void {
    this.dialogRef.close(true);
    this.router.navigate(['/dashboard/LastBullPaie', empId]);
  }
  viewBullPaieList(empId: number): void {
    this.dialogRef.close(true);
    this.router.navigate(['/dashboard/bullPaieList', empId]);
  }

  viewDeclarationFiscale(empId: number): void {
    this.dialogRef.close(true);
    this.router.navigate(['/dashboard/DeclarationFiscaleList', empId]);
  }

}
