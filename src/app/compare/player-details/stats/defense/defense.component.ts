import { Component, OnInit, Input } from '@angular/core';
import { Defense } from '../../../../models/defense.model';

@Component({
  selector: 'app-defense',
  templateUrl: './defense.component.html',
  styleUrls: ['./defense.component.css']
})
export class DefenseComponent implements OnInit {
  @Input() defense: Defense;
  constructor() { }

  ngOnInit() {
  }

}
