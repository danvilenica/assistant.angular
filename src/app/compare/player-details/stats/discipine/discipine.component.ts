import { Component, OnInit, Input } from '@angular/core';
import { Discipline } from '../../../../models/discipline.model';

@Component({
  selector: 'app-discipline',
  templateUrl: './discipine.component.html',
  styleUrls: ['./discipine.component.css']
})
export class DiscipineComponent implements OnInit {
  @Input() discipline: Discipline;
  constructor() { }

  ngOnInit() {
  }

}
