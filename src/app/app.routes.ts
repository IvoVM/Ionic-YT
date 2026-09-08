import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./modules/tabs/tabs.component').then((m) => m.TabsComponent),
    children:[
      {
        path: 'home',
        loadComponent: () => import('./modules/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'search',
        loadComponent: () => import('./modules/search/search.page').then((m) => m.SearchPage),
      },
      {
        path: 'library',
        loadComponent: () => import('./modules/library/library.page').then((m) => m.LibraryPage),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
