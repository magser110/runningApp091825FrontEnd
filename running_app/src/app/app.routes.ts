import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { noAuthGuard } from './no-auth.guard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard],
  }
  // {

  // // path for runs goes here
  // canActivate: [authGuard]
  // }
];
