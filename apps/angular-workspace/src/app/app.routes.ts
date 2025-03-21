import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@angular-workspace/ui').then((m) => m.DashboardComponent),
  },
];
