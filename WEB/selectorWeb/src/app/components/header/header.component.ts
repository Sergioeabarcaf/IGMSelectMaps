import { Component } from '@angular/core';
import { MqttIgmService } from '../../services/mqtt-igm.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public _igmService: MqttIgmService) { }

}
