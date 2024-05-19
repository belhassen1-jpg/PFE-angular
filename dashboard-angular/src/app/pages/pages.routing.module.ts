import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from '../User/user-list/user-list.component';
import { DepartmentListComponent } from '../Department/department-list/department-list.component';
import { EmployeeListComponent } from '../Employee/employee-list/employee-list.component';
import { CongeListComponent } from '../Conge/conge-list/conge-list.component';
import { AuthGuard } from '../User/AuthGuard';
import { JobOffersListComponent } from '../Job Offer/job-offers-list/job-offers-list.component';
import { JobOfferGetComponent } from '../Job Offer/job-offer-get/job-offer-get.component';
import { JobApplicationListComponent } from '../Job Application/job-application-list/job-application-list.component';
import { JobApplicationDetailsComponent } from '../Job Application/job-application-details/job-application-details.component';
import { PartenaireListComponent } from '../Partenaire/partenaire-list/partenaire-list.component';
import { JobofferApplicationComponent } from '../Job Application/joboffer-application/joboffer-application.component';
import { EventListComponent } from '../Evenement/event-list/event-list.component';
import { EventParticipateComponent } from '../Evenement/event-participate/event-participate.component';
import { EventDemandeParticipationListComponent } from '../Evenement/event-demande-participation-list/event-demande-participation-list.component';
import { ChefDepartmentListComponent } from '../Department/chef-department-list/chef-department-list.component';
import { DepensesListComponent } from '../Finance/depenses-list/depenses-list.component';
import { ObjEpargneListComponent } from '../Finance/obj-epargne-list/obj-epargne-list.component';
import { AnalyseFinacierGetComponent } from '../Finance/analyse-finacier-get/analyse-finacier-get.component';
import { EventListEmployeeComponent } from '../Evenement/event-list-employee/event-list-employee.component';
import { FeuilleTempsListComponent } from '../Planning/feuille-temps-list/feuille-temps-list.component';
import { PlanningListComponent } from '../Planning/planning-list/planning-list.component';
import { FeuilleTempsEmployeeListComponent } from '../Planning/feuille-temps-employee-list/feuille-temps-employee-list.component';
import { FeuilleTempsOfPlanListComponent } from '../Planning/feuille-temps-of-plan-list/feuille-temps-of-plan-list.component';
import { BullPaieListComponent } from '../paie/bull-paie-list/bull-paie-list.component';
import { LastPaieComponent } from '../paie/last-paie/last-paie.component';
import { DeclarationFiscaleListComponent } from '../paie/declaration-fiscale-list/declaration-fiscale-list.component';
import { LastBullBullPaieComponent } from '../paie/last-bull-paie/last-bull-paie.component';
import { EmpBullPaieListComponent } from '../paie/emp-bull-paie-list/emp-bull-paie-list.component';
import { EmpLastBullPaieComponent } from '../paie/emp-last-bull-paie/emp-last-bull-paie.component';
import { EmpLastPaieComponent } from '../paie/emp-last-paie/emp-last-paie.component';
import { ConventionDemandeParticipationListComponent } from '../Convention/convention-demande-participation-list/convention-demande-participation-list.component';
import { ConventionListEmployeeComponent } from '../Convention/convention-list-employee/convention-list-employee.component';
import { ConventionListComponent } from '../Convention/convention-list/convention-list.component';
import { DemissionListComponent } from '../Demission/demission-list/demission-list.component';
import { FormationListComponent } from '../Formation/formation-list/formation-list.component';
import { FormationListEmployeeComponent } from '../Formation/formation-list-employe/formation-list-employe.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },

  // Employee
  { path: 'userlist',                component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'deplist',                component: DepartmentListComponent },
  { path: 'chefdeplist',                component: ChefDepartmentListComponent },
  { path: 'emplist',                component: EmployeeListComponent },

  { path: 'jobofferslist',                component: JobOffersListComponent },
  { path: 'joboffersdetails/:id',                component: JobOfferGetComponent },
  { path: 'jobapplications',                component: JobApplicationListComponent },
  { path: 'jobapplicationsdetails/:id',                component: JobApplicationDetailsComponent },
  { path: 'partenairelist',                component: PartenaireListComponent },
  { path: 'joboffer-applications/:id',                component: JobofferApplicationComponent },
  
  { path: 'demissionlist',                component: DemissionListComponent },
  { path: 'congelist',                component: CongeListComponent },

  { path: 'formationlist',                component: FormationListComponent },
  { path: 'formationlist-employee',       component: FormationListEmployeeComponent },


  { path: 'eventlist',                component: EventListComponent },
  { path: 'eventlist-employee',                component: EventListEmployeeComponent },
  { path: 'eventDemandelist',                component: EventDemandeParticipationListComponent },
  
  { path: 'conventionDemandelist',                component: ConventionDemandeParticipationListComponent },
  { path: 'conventionlist-employee',                component: ConventionListEmployeeComponent },
  { path: 'conventionlist',                      component: ConventionListComponent },


  { path: 'depenseslist',                component: DepensesListComponent },
  { path: 'objectifs-epargne-list',                component: ObjEpargneListComponent },
  { path: 'analyse-financier',                component: AnalyseFinacierGetComponent },

  { path: 'feuille-temps-list',                component: FeuilleTempsListComponent },
  { path: 'planninglist',                component: PlanningListComponent },
  { path: 'feuille-temps-employee/:id',                component: FeuilleTempsEmployeeListComponent },
  { path: 'feuille-temps-plan/:id',                component: FeuilleTempsOfPlanListComponent },

  //paie RH
  { path: 'bullPaieList/:id',                component: BullPaieListComponent },
  { path: 'LastPaie/:id',                component: LastPaieComponent },
  { path: 'LastBullPaie/:id',                component: LastBullBullPaieComponent },
  { path: 'DeclarationFiscaleList/:id',                component: DeclarationFiscaleListComponent },
  //paie employee
  { path: 'emp-bullPaieList',                component: EmpBullPaieListComponent },
  { path: 'emp-LastBullPaie',                component: EmpLastBullPaieComponent },
  { path: 'emp-LastPaie',                component: EmpLastPaieComponent },



  // { path: 'participate-event/:id', component: EventParticipateComponent },






  { path: 'congelist',                component: CongeListComponent, canActivate: [AuthGuard] },

  // RH



];
