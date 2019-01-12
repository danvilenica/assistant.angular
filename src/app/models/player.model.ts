import { PersonalDetails } from './personalDetails.model';
import { SocialNetworkInfo } from './socialNetworkInfo.model';
import { LeagueRecord } from './leagueRecord.model';
import { Stats } from './stats.model';
import { SeasonHistoryStats } from './seasonHistoryStats.model';

export class Player {
    public id: string;
    public number: number;
    public personalDetails: PersonalDetails;
    public socialNetworkInfo: SocialNetworkInfo;
    public leagueRecord: LeagueRecord;
    public stats: Stats[];

}

