import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Posts } from './posts/posts';
import { Protected } from './protected/protected';
import { AuthGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts, canActivate: [AuthGuard] },
  { path: 'protected', component: Protected, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
