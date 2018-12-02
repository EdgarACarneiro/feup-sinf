import { Component, OnInit } from '@angular/core';
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
    this.saft.get('GeneralAccounts/Accountid/71').subscribe(
      (data: Array<any>) => this.revenueFromSales = data[0].ClosingCreditBalance
    );
    this.saft.get('GeneralAccounts/AccountID/61').subscribe(
      (data: Array<any>) => this.costOfGoodsSold = data[0].ClosingDebitBalance
    );
  }

}
