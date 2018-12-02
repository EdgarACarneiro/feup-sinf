import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss']
})
export class CashFlowComponent implements OnInit {

  private cashFlow: string;

  constructor(private saft: SafTService) { }

  ngOnInit() {
    this.saft.get('GeneralAccounts/AccountID/11').subscribe(
      (data: Array<any>) => this.cashFlow = (data[0].ClosingDebitBalance - data[0].ClosingCreditBalance).toFixed(1)
    );
  }

}
