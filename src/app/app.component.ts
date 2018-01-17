import { Component } from '@angular/core';

import { StockQuote } from './models';

@Component({
  selector: 'aec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tsla: StockQuote = {
    symbol: 'tsla',
    company: 'Tesla Inc',
    last: 285,
    details: {
      lastUpdateOn: new Date(2018, 0, 17, 21, 29),
      nextEarnings: new Date(2018, 1, 28)
    }
  };
}
