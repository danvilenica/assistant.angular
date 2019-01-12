import { Component, OnInit, Input } from '@angular/core';
import { PersonalDetails } from '../../../models/personalDetails.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input('personalDetails') personalDetails: PersonalDetails;
  constructor() { }

  ngOnInit() {
  }

}
