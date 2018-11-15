import {Component} from '@angular/core';
import { MqttIgmService } from './services/mqtt-igm.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public _igmService: MqttIgmService) {}
}
