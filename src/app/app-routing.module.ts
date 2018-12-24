import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { CompareComponent } from './compare/compare.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'select', component: SelectTeamsComponent, canActivate: [AuthGuard] },
  { path: 'compare/:homeId/home/:awayId/away', component: CompareComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
