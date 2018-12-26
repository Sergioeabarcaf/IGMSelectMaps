import { Injectable, OnDestroy } from '@angular/core';
import {ConnectionStatus, MqttService, SubscriptionGrant} from '../ngx-mqtt-client';
import {IClientOptions} from 'mqtt';

@Injectable()
export class MqttIgmService implements OnDestroy  {

  load = false;
  info = false;

  constructor(private _mqttService: MqttService) {
    this._mqttService.status().subscribe((s: ConnectionStatus) => {
    const status = s === ConnectionStatus.CONNECTED ? 'CONNECTED' : 'DISCONNECTED';
    this.subscribe();
    console.log(`Mqtt client connection status: ${status}`);
    });
  }

  connect(config: IClientOptions): void {
    this._mqttService.connect(config);
  }

  subscribe(): void {
    this._mqttService.subscribeTo<any>('load').subscribe({
      next: (msg: SubscriptionGrant | any) => {
        if (msg instanceof SubscriptionGrant) {
          console.log('subscrito al topico load');
        } else {
          console.log(msg);
          if (this.load = (msg === 'true')) {
              this.load = false;
          }
        }
      },
      error: (error: Error) => {
          console.log(`hubo un error al subscribirse: ${error.message}`);
      }
    });
  }

  sendMsg(id): void {
    this._mqttService.publishTo<any>('send', id).subscribe({
      next: () => {
        this.load = true;
        console.log(`Mensaje enviado a send: ${ id }`);
      },
      error: (error: Error) => {
        console.log(`hubo un error al enviar mensaje: ${error.message}`);
      }
    });
  }

  unsubscribe(): void {
    this._mqttService.unsubscribeFrom('load').subscribe({
      next: () => {
        console.log('Unsubscribe from fooBar topic');
      },
      error: (error: Error) => {
        console.log(`Something went wrong: ${error.message}`);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe();
    this._mqttService.end();
  }

}
