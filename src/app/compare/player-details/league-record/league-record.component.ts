import { Component, OnInit, Input } from '@angular/core';
import { LeagueRecord } from '../../../models/leagueRecord.model';

@Component({
  selector: 'app-league-record',
  templateUrl: './league-record.component.html',
  styleUrls: ['./league-record.component.css']
})
export class LeagueRecordComponent implements OnInit {
  @Input() leagueRecord: LeagueRecord;

  constructor() { }

  ngOnInit() {
  }

}
