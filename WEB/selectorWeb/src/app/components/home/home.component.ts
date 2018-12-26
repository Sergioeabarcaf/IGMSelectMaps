import { Component } from '@angular/core';
import { MqttIgmService } from '../../services/mqtt-igm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public _igmService: MqttIgmService) { }

  info() {
    this._igmService.info = true;
  }

}
