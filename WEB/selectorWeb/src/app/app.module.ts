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
import { InfoComponent } from './components/info/info.component';

@NgModule({
    declarations: [
        AppComponent,
        LoadComponent,
        HeaderComponent,
        HomeComponent,
        InfoComponent
    ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        FlexLayoutModule,
        MatButtonModule,
        NgxMqttClientModule.withOptions({
            host: '127.0.0.1',
            protocol: 'ws',
            port: 9001,
            path: '',
            keepalive: 5
        })
    ],
    providers: [MqttIgmService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
