import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'enquiries',
        loadComponent: () =>
          import('./components/enquiries/enquiries.component').then(
            (m) => m.EnquiriesComponent
          ),
      },
    ],
  },
];
