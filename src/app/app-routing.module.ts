import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { CompareComponent } from './compare/compare.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'select', component: SelectTeamsComponent, canActivate: [AuthGuard] },
  {
    path: 'compare/:homeId/home/:awayId/away',
    component: CompareComponent,
    canActivate: [AuthGuard]
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
