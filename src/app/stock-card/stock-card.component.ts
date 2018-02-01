import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component, Input } from '@angular/core';

import { StockQuote } from '../models';
import {
  ElementChangingVisibility,
  HiddenElement
} from '@utilities/animations';

@Component({
  selector: 'aec-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
  animations: [
    trigger('detailsVisibility', [
      state(
        'hidden',
        style({
          opacity: 0,
          display: 'none'
        })
      ),
      state(
        'shown',
        style({
          opacity: 1,
          display: 'block'
        })
      ),
      transition('hidden => shown', animate('1000ms ease-in')),
      transition('shown => hidden', animate('1000ms ease-out'))
    ])
  ]
})
export class StockCardComponent {
  detailsVisibility: ElementChangingVisibility = new HiddenElement();

  get availableDetails() {
    return Object.keys(this.stockQuote.details).length;
  }

  @Input() stockQuote: StockQuote;

  toggleDetailsViewVisibility() {
    this.detailsVisibility = this.detailsVisibility.toggle();
  }
}
