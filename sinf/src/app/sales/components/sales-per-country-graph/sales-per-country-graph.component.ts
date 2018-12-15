import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sales-per-country-graph',
  templateUrl: './sales-per-country-graph.component.html',
  styleUrls: ['./sales-per-country-graph.component.scss']
})
export class SalesPerCountryGraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
  }

}
