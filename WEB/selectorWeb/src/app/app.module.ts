import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { MqttIgmService } from './services/mqtt-igm.service';

import {AppComponent} from './app.component';
import {NgxMqttClientModule} from './ngx-mqtt-client';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LoadComponent } from './components/load/load.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        NgxMqttClientModule.withOptions({
            host: '192.168.1.197',
            protocol: 'ws',
            port: 1883,
            path: '',
            keepalive: 5
        })
    ],
    providers: [MqttIgmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
