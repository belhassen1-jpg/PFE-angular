import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from '../User/user-list/user-list.component';
import { DepartmentListComponent } from '../Department/department-list/department-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToastrModule } from 'ngx-toastr';

import { UserUpdateComponent } from '../User/user-update/user-update.component';
import { DepartmentAddComponent } from '../Department/department-add/department-add.component';
import { DepartmentUpdateComponent } from '../Department/department-update/department-update.component';
import { EmployeeListComponent } from '../Employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from '../Employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from '../Employee/employee-update/employee-update.component';
import { AddUserComponent } from '../User/add-user/add-user.component';
import { GetEmployeeComponent } from '../Employee/get-employee/get-employee.component';
import { JobOfferGetComponent } from '../Job Offer/job-offer-get/job-offer-get.component';
import { JobOffersAddComponent } from '../Job Offer/job-offers-add/job-offers-add.component';
import { JobOffersListComponent } from '../Job Offer/job-offers-list/job-offers-list.component';
import { JobOfferUpdateComponent } from '../Job Offer/job-offer-update/job-offer-update.component';
import { JobApplicationAddComponent } from '../Job Application/job-application-add/job-application-add.component';
import { JobApplicationDetailsComponent } from '../Job Application/job-application-details/job-application-details.component';
import { JobApplicationListComponent } from '../Job Application/job-application-list/job-application-list.component';
import { JobApplicationUpdateComponent } from '../Job Application/job-application-update/job-application-update.component';
import { PartenaireAddComponent } from '../Partenaire/partenaire-add/partenaire-add.component';
import { PartenaireListComponent } from '../Partenaire/partenaire-list/partenaire-list.component';
import { JobofferApplicationComponent } from '../Job Application/joboffer-application/joboffer-application.component';
import { EventAddComponent } from '../Evenement/event-add/event-add.component';
import { EventListComponent } from '../Evenement/event-list/event-list.component';
import { EventParticipateComponent } from '../Evenement/event-participate/event-participate.component';
import { EventAcceptParticipateComponent } from '../Evenement/event-accept-participate/event-accept-participate.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { EventDeleteEmployeeComponent } from '../Evenement/event-delete-employee/event-delete-employee.component';
import { EventDemandeParticipationListComponent } from '../Evenement/event-demande-participation-list/event-demande-participation-list.component';
import { ChefDepartmentListComponent } from '../Department/chef-department-list/chef-department-list.component';
import { ChefDepartmentAddComponent } from '../Department/chef-department-add/chef-department-add.component';
import { EventParticipantListComponent } from '../Evenement/event-participant-list/event-participant-list.component';
import { DepensesAddComponent } from '../Finance/depenses-add/depenses-add.component';
import { DepensesListComponent } from '../Finance/depenses-list/depenses-list.component';
import { ObjEpargneAddComponent } from '../Finance/obj-epargne-add/obj-epargne-add.component';
import { ObjEpargneListComponent } from '../Finance/obj-epargne-list/obj-epargne-list.component';
import { AnalyseFinacierGetComponent } from '../Finance/analyse-finacier-get/analyse-finacier-get.component';
import { EventListEmployeeComponent } from '../Evenement/event-list-employee/event-list-employee.component';
import { FeuilleTempsAcceptComponent } from '../Planning/feuille-temps-accept/feuille-temps-accept.component';
import { FeuilleTempsListComponent } from '../Planning/feuille-temps-list/feuille-temps-list.component';
import { FeuilleTempsAddComponent } from '../Planning/feuille-temps-add/feuille-temps-add.component';
import { PlanningAddComponent } from '../Planning/planning-add/planning-add.component';
import { PlanningListComponent } from '../Planning/planning-list/planning-list.component';
import { FeuilleTempsEmployeeListComponent } from '../Planning/feuille-temps-employee-list/feuille-temps-employee-list.component';
import { FeuilleTempsOfPlanListComponent } from '../Planning/feuille-temps-of-plan-list/feuille-temps-of-plan-list.component';
import { BullPaieAddComponent } from '../paie/bull-paie-add/bull-paie-add.component';
import { BullPaieListComponent } from '../paie/bull-paie-list/bull-paie-list.component';
import { LastPaieComponent } from '../paie/last-paie/last-paie.component';
import { PaieAddComponent } from '../paie/paie-add/paie-add.component';
import { DeclarationFiscaleAddComponent } from '../paie/declaration-fiscale-add/declaration-fiscale-add.component';
import { DeclarationFiscaleListComponent } from '../paie/declaration-fiscale-list/declaration-fiscale-list.component';
import { LastBullBullPaieComponent } from '../paie/last-bull-paie/last-bull-paie.component';
import { EmpBullPaieListComponent } from '../paie/emp-bull-paie-list/emp-bull-paie-list.component';
import { EmpLastBullPaieComponent } from '../paie/emp-last-bull-paie/emp-last-bull-paie.component';
import { EmpLastPaieComponent } from '../paie/emp-last-paie/emp-last-paie.component';
import { ConventionAddComponent } from '../Convention/convention-add/convention-add.component';
import { ConventionAcceptParticipateComponent } from '../Convention/convention-accept-participate/convention-accept-participate.component';
import { ConventionDeleteEmployeeComponent } from '../Convention/convention-delete-employee/convention-delete-employee.component';
import { ConventionListComponent } from '../Convention/convention-list/convention-list.component';
import { ConventionDemandeParticipationListComponent } from '../Convention/convention-demande-participation-list/convention-demande-participation-list.component';
import { ConventionListEmployeeComponent } from '../Convention/convention-list-employee/convention-list-employee.component';
import { ConventionParticipantListComponent } from '../Convention/convention-participant-list/convention-participant-list.component';
import { ConventionParticipateComponent } from '../Convention/convention-participate/convention-participate.component';
import { DemissionListComponent } from '../Demission/demission-list/demission-list.component';
import { DemissionAddComponent } from '../Demission/demission-add/demission-add.component';
import { CongeListComponent } from '../Conge/conge-list/conge-list.component';
import { StatusEditDialogComponent } from '../Conge/status-edit-dialog/status-edit-dialog.component';
import { CongeAddComponent } from '../Conge/conge-add/conge-add.component';
import { FormationAddComponent } from '../Formation/formation-add/formation-add.component';
import { FormationListComponent } from '../Formation/formation-list/formation-list.component';
import { FormationListEmployeeComponent } from '../Formation/formation-list-employe/formation-list-employe.component';
import { FormationParticipantListComponent } from '../Formation/formation-participant-list/formation-participant-list.component';
import { FormationParticipateComponent } from '../Formation/formation-participate/formation-participate.component';


@NgModule({
  declarations: [
  AppDashboardComponent,
  UserListComponent,
  DepartmentListComponent,
  UserUpdateComponent,
  DepartmentAddComponent,
  DepartmentUpdateComponent,
  EmployeeListComponent,
  EmployeeAddComponent,
  EmployeeUpdateComponent,
  AddUserComponent,
  GetEmployeeComponent,
  JobOfferGetComponent,
  JobOffersAddComponent,
  JobOffersListComponent,
  JobOfferUpdateComponent,
  JobApplicationAddComponent,
  JobApplicationDetailsComponent,
  JobApplicationListComponent,
  JobApplicationUpdateComponent,
  PartenaireAddComponent,
  PartenaireListComponent,
  JobofferApplicationComponent,
  FormationAddComponent,
  FormationListComponent,
  FormationListEmployeeComponent,
  FormationParticipantListComponent,
  FormationParticipateComponent,
  DemissionListComponent,
  DemissionAddComponent,
  CongeListComponent,
  CongeAddComponent,
  StatusEditDialogComponent,
  EventAddComponent,
  EventListComponent,
  EventParticipateComponent,
  EventAcceptParticipateComponent,
  EventDeleteEmployeeComponent,
  EventParticipantListComponent,
  EventDemandeParticipationListComponent,
  ConventionAddComponent,
  ConventionAcceptParticipateComponent,
  ConventionDeleteEmployeeComponent,
  ConventionListComponent,
  ConventionParticipantListComponent,
  ConventionParticipateComponent,
  ConventionDemandeParticipationListComponent,
  ConventionListEmployeeComponent,
  ChefDepartmentListComponent,
  ChefDepartmentAddComponent,
  DepensesAddComponent,
  DepensesListComponent,
  ObjEpargneAddComponent,
  ObjEpargneListComponent,
  AnalyseFinacierGetComponent,
  EventListEmployeeComponent,
  FeuilleTempsAcceptComponent,
  FeuilleTempsListComponent,
  FeuilleTempsAddComponent,
  FeuilleTempsEmployeeListComponent,
  PlanningAddComponent,
  PlanningListComponent,
  FeuilleTempsOfPlanListComponent,
  BullPaieAddComponent,
  BullPaieListComponent,
  LastPaieComponent,
  PaieAddComponent,
  DeclarationFiscaleAddComponent,
  DeclarationFiscaleListComponent,
  LastBullBullPaieComponent,
  EmpBullPaieListComponent,
  EmpLastBullPaieComponent,
  EmpLastPaieComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule, 
    MatChipsModule,
    ToastrModule.forRoot(),
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
