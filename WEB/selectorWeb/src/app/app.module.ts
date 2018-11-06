import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgxMqttClientModule} from './ngx-mqtt-client';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoadComponent } from './components/load/load.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        NgxMqttClientModule.withOptions({
            host: '10.26.103.245',
            protocol: 'ws',
            port: 9001,
            path: '',
            keepalive: 5
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
