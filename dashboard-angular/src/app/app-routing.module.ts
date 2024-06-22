import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegisterComponent } from './User/user-register/user-register.component';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { ResetPasswordSmsComponent } from './User/reset-password-sms/reset-password-sms.component';
import { ResetPasswordComponent } from './User/reset-password/reset-password.component';

const routes: Routes = [
  
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.module').then((m) => m.ExtraModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },

  // User Pages

  { path: 'login',                component: UserLoginComponent },
  { path: 'register',                component: UserRegisterComponent },
  { path: 'profile',                component: UserProfileComponent },
  { path: 'resetpassSMS',component: ResetPasswordSmsComponent},
  { path: 'resetpass',component: ResetPasswordComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
