import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    StockCardComponent,
    StockDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'de' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
