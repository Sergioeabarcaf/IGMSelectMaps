import {Component, OnDestroy} from '@angular/core';
import {ConnectionStatus, MqttService, SubscriptionGrant} from './ngx-mqtt-client';
import {IClientOptions} from 'mqtt';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    maps = ['1', '2'];
    load = false;

    constructor(private _mqttService: MqttService) {

        /**
         * Tracks connection status.
         */
        this._mqttService.status().subscribe((s: ConnectionStatus) => {
            const status = s === ConnectionStatus.CONNECTED ? 'CONNECTED' : 'DISCONNECTED';
            this.subscribe();
            console.log(`Mqtt client connection status: ${status}`);
        });
    }

    /**
     * Manages connection manually.
     * If there is an active connection this will forcefully disconnect that first.
     * @param {IClientOptions} config
     */
    connect(config: IClientOptions): void {
        this._mqttService.connect(config);
    }

    /**
     * Subscribes to fooBar topic.
     * The first emitted value will be a {@see SubscriptionGrant} to confirm your subscription was successful.
     * After that the subscription will only emit new value if someone publishes into the fooBar topic.
     * */
    subscribe(): void {
        this._mqttService.subscribeTo<any>('load')
            .subscribe({
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


    /**
     * Sends message to fooBar topic.
     */
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

    /**
     * Unsubscribe from fooBar topic.
     */
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

    /**
     * The purpose of this is, when the user leave the app we should cleanup our subscriptions
     * and close the connection with the broker
     */
    ngOnDestroy(): void {
        this.unsubscribe();
        this._mqttService.end();
    }

}
