import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@opal/ui').then((m) => m.DashboardComponent),
  },
];
