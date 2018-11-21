import { Component } from '@angular/core';
import { MqttIgmService } from '../../services/mqtt-igm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  maps = [
    {
      'id': 1,
      'serial': 'a'
    },
    {
      'id': 2,
      'serial': 'b'
    }
  ];

  constructor(public _igmService: MqttIgmService) { }

}
