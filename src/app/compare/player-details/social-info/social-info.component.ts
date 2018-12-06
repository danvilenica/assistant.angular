import { Component, OnInit, Input } from '@angular/core';
import { SocialNetworkInfo } from '../../../models/socialNetworkInfo.model';

@Component({
  selector: 'app-social-info',
  templateUrl: './social-info.component.html',
  styleUrls: ['./social-info.component.css']
})
export class SocialInfoComponent implements OnInit {
  @Input() socialInfo: SocialNetworkInfo;

  constructor() { }

  ngOnInit() {
  }

}
