import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginpageComponent } from './Components/loginpage/loginpage.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentpageComponent } from './Components/documentpage/documentpage.component';
import { AnalystpageComponent } from './Components/analystpage/analystpage.component';
import { SignuppageComponent } from './Components/signuppage/signuppage.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { JobApplicationAddComponent } from './Components/Job Application/job-application-add/job-application-add.component';
import { JobOfferGetComponent } from './Components/Job Offer/job-offer-get/job-offer-get.component';
import { JobOffersListComponent } from './Components/Job Offer/job-offers-list/job-offers-list.component';


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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

import { UserProfileComponent } from './Components/User/user-profile/user-profile.component';
import { JobApplicationListComponent } from './Components/Job Application/job-application-list/job-application-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    HomepageComponent,
    DocumentpageComponent,
    AnalystpageComponent,
    SignuppageComponent,
    JobApplicationAddComponent,
    JobOfferGetComponent,
    JobOffersListComponent,
    UserProfileComponent,
    JobApplicationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
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
    MatMenuModule,
    // NgxMatTimepickerModule,
    // NgxMatDatetimePickerModule,
    // NgxMatNativeDateModule, 
    MatChipsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
