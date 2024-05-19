import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { DocumentpageComponent } from './Components/documentpage/documentpage.component';
import { AnalystpageComponent } from './Components/analystpage/analystpage.component';
import { SignuppageComponent } from './Components/signuppage/signuppage.component';
import { AuthGuard } from './Components/User/AuthGuard';
import { JobOffersListComponent } from './Components/Job Offer/job-offers-list/job-offers-list.component';
import { JobOfferGetComponent } from './Components/Job Offer/job-offer-get/job-offer-get.component';
import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { JobApplicationListComponent } from './Components/Job Application/job-application-list/job-application-list.component';

const routes: Routes = [
  {path: 'home', title:'home',component:HomepageComponent},
  {path: 'document', title:'document', component:DocumentpageComponent},

  {path: 'login', title:'login', component:LoginpageComponent},
  {path: 'profile', title:'profile', component:UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'signup', title:'signup', component:SignuppageComponent},

  {path: 'jobs', title:'job offers', component:JobOffersListComponent, canActivate: [AuthGuard]},
  {path: 'jobapplications', title:'my job applications', component:JobApplicationListComponent, canActivate: [AuthGuard]},

  { path: 'joboffersdetails/:id',                component: JobOfferGetComponent, canActivate: [AuthGuard]},

  {path: '', redirectTo:'home',pathMatch:'full'},

  // { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect empty path to login
     { path: '**', redirectTo: '/home' }, // Redirect wrong paths to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
