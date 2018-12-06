import { Component, OnInit, Input } from '@angular/core';
import { Attack } from '../../../../models/attack.model';

@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.css']
})
export class AttackComponent implements OnInit {
  @Input() attack: Attack;
  constructor() { }

  ngOnInit() {
  }

}
