import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
 
 
export const routes: Routes = [
  { 
    path: 'registration', 
    component: RegistrationComponent 
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: '**', 
    component: HomeComponent
  },
];


 
