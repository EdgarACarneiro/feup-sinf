import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-profit-margin',
  templateUrl: './profit-margin.component.html',
  styleUrls: ['./profit-margin.component.scss']
})
export class ProfitMarginComponent implements OnInit {

  private revenueFromSales: number;

  private costOfGoodsSold: number;

  constructor(private saft: SafTService) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`AccountSum/71?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.revenueFromSales = data.totalCredit - data.totalDebit
    );
    this.saft.get(`AccountSum/61?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.costOfGoodsSold = data.totalCredit - data.totalDebit
    );
  }

}
