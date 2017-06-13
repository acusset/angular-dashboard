import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdChipsModule, MdGridListModule, MdListModule, MdProgressBarModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {TechCrunchService} from './news/services/techcrunch.service';
import {BusComponent} from './bus/bus.component';
import {WeatherComponent} from './weather/weather.component';
import {WeatherService} from './weather/services/weather.service';
import {BusService} from './bus/services/bus.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    BusComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdToolbarModule,
    MdChipsModule,
    MdProgressBarModule
  ],
  providers: [
    TechCrunchService,
    WeatherService,
    BusService,
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
