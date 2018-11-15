import { Component } from '@angular/core';
import { MqttIgmService } from '../../services/mqtt-igm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  maps = ['1', '2'];

  constructor(public _igmService: MqttIgmService) { }

}
