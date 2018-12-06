import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { CompareComponent } from './compare/compare.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'compare', loadChildren: './compare/compare.module#CompareModule'},
  { path: 'compare/:homeId/home/:awayId/away', component: CompareComponent},
  { path: 'select', component: SelectTeamsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

