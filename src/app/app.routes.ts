import { Routes } from '@angular/router';
import { Dashboard } from './component/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./component/login/login').then((m) => m.Login),
  },
  {
    path: 'registration',
    loadComponent: () =>
      import('./component/registration/registration').then(
        (m) => m.RegistrationComponent
      ),
  },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      {
        path: 'reports',
        loadComponent: () =>
          import('./component/patientmangement/reports/reports/reports').then(
            (m) => m.Reports
          ),
      },
      {
        path:"patient",
        loadComponent: () =>
          import('./component/patientmangement/patient-profile/patient-profile').then(
            (m) => m.PatientProfile
          ),
      },
      {
        path: '',
        redirectTo: 'patient', 
        pathMatch: 'full',
      }
    ],
  },
   
];
