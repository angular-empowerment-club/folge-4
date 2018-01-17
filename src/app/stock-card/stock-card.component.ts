import { Component, Input } from '@angular/core';

import { StockQuote } from '../models';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent {
  isDetailsViewHidden = true;

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  @Input() stockQuote: StockQuote;

  toggleDetailsViewVisibility() {
    this.isDetailsViewHidden = !this.isDetailsViewHidden;
  }
}
