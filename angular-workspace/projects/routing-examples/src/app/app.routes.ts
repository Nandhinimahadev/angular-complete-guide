import { Routes } from '@angular/router';
import { PageA } from './page-a/page-a';
import { PageB } from './page-b/page-b';

export const routes: Routes = [
  { path: '', redirectTo: 'page-a', pathMatch: 'full' },
  { path: 'page-a', component: PageA},
  { path: 'page-b', component: PageB },
  { path: '**', redirectTo: 'page-a' } 
];
