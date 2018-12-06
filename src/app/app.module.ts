import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { CompareComponent } from './compare/compare.component';
import { TeamComponent } from './team/team.component';
import { PlayerListComponent } from './compare/player-list/player-list.component';
import { PlayerDetailsComponent } from './compare/player-details/player-details.component';
import { PersonalDetailsComponent } from './compare/player-details/personal-details/personal-details.component';
import { SocialInfoComponent } from './compare/player-details/social-info/social-info.component';
import { LeagueRecordComponent } from './compare/player-details/league-record/league-record.component';
import { StatsComponent } from './compare/player-details/stats/stats.component';
import { TeamService } from './services/team.service';
import { AttackComponent } from './compare/player-details/stats/attack/attack.component';
import { DefenseComponent } from './compare/player-details/stats/defense/defense.component';
import { TeamPlayComponent } from './compare/player-details/stats/team-play/team-play.component';
import { DiscipineComponent } from './compare/player-details/stats/discipine/discipine.component';
import { DuelStatsComponent } from './compare/duel-stats/duel-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SelectTeamsComponent,
    CompareComponent,
    TeamComponent,
    PlayerListComponent,
    PlayerDetailsComponent,
    CompareComponent,
    PersonalDetailsComponent,
    SocialInfoComponent,
    LeagueRecordComponent,
    StatsComponent,
    AttackComponent,
    DefenseComponent,
    TeamPlayComponent,
    DiscipineComponent,
    DuelStatsComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
