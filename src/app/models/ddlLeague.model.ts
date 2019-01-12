import { DdlTeam } from './ddlTeam.model';

export class DdlLeague {
  public id: string;
  public name: string;
  public teams: DdlTeam[];
}
