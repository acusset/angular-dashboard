import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule, MdChipsModule, MdGridListModule, MdProgressBarModule, MdToolbarModule} from '@angular/material';

import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {TechCrunchService} from './news/services/techcrunch.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdGridListModule,
    MdCardModule,
    MdToolbarModule,
    MdChipsModule,
    MdProgressBarModule
  ],
  providers: [TechCrunchService,
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
