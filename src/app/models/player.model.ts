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

    constructor($id: string,
        $personalDetails: PersonalDetails,
        $socialNetworkInfo: SocialNetworkInfo,
        $leagueRecord: LeagueRecord,
        $stats: Stats[]) {
        this.id = $id;
        this.personalDetails = $personalDetails;
        this.socialNetworkInfo = $socialNetworkInfo;
        this.leagueRecord = $leagueRecord;
        this.stats = $stats;
    }

}

