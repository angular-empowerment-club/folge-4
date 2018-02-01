import { Component, OnInit } from '@angular/core';
import { StockQuoteRisk } from '../models';

@Component({
  selector: 'aec-stock-risk-switcher',
  templateUrl: './stock-risk-switcher.component.html',
  styleUrls: ['./stock-risk-switcher.component.css']
})
export class StockRiskSwitcherComponent implements OnInit {
  risks = StockQuoteRisk;

  constructor() { }

  ngOnInit() {
  }

}
