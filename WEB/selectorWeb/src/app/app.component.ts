import { Component, OnDestroy } from '@angular/core';
import {ConnectionStatus, MqttService, SubscriptionGrant} from 'ngx-mqtt-client';
import {IClientOptions} from 'mqtt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  maps = ['1', '2'];

  constructor(private _mqttService: MqttService) {
    this._mqttService.status().subscribe((s: ConnectionStatus) => {
      const status = s === ConnectionStatus.CONNECTED ? 'CONNECTED' : 'DISCONNECTED';
      console.log(`Mqtt client connection status: ${status}`);
    });
  }

  connect(config: IClientOptions): void {
    this._mqttService.connect(config);
    this.subscribe();
  }

  subscribe(): void {
    this._mqttService.subscribeTo<any>('fooBar')
        .subscribe({
            next: (msg: SubscriptionGrant | any) => {
                if (msg instanceof SubscriptionGrant) {
                    console.log('Subscribed to fooBar topic!');
                } else {
                    console.log(`mensaje recibido desde fooBar: ${ msg }`);
                }
            },
            error: (error: Error) => {
                console.log(`Something went wrong: ${error.message}`);
            }
        });
  }

  select(id) {
    console.log(id);
    this._mqttService.publishTo<any>('fooBar', id).subscribe({
      next: () => {
          console.log(`mensaje enviado a topico fooBar: ${ id }`);
      },
      error: (error: Error) => {
          console.log(`Something went wrong: ${error.message}`);
      }
    });
  }

  ngOnDestroy(): void {
    this._mqttService.end();
  }

}
