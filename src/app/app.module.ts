import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SelectTeamsComponent } from './select-teams/select-teams.component';
import { CompareComponent } from './compare/compare.component';
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
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { AlertService } from './services/alert.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamsComponent,
    CompareComponent,
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
    DuelStatsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    AuthModule
  ],
  providers: [
    TeamService,
    UserService,
    AuthGuard,
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
