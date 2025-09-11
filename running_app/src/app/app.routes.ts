import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { noAuthGuard } from './no-auth.guard';
import { authGuard } from './auth.guard';
import { RunListComponent } from './run-list/run-list.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full',

  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [noAuthGuard],
  },
  {
    path: 'run-list',
    component: RunListComponent,  canActivate: [authGuard]
  },
];
