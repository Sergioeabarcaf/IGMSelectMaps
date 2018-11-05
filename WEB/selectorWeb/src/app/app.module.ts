import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxMqttClientModule} from 'ngx-mqtt-client';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMqttClientModule.withOptions({
      host: '192.168.1.145',
      protocol: 'ws',
      port: 9001,
      path: '',
      keepalive: 5
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
