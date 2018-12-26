import { Component, OnInit } from '@angular/core';
import { MqttIgmService } from '../../services/mqtt-igm.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(public _igmService: MqttIgmService) { }

  ngOnInit() {
  }

  home() {
    this._igmService.info = false;
  }

}
