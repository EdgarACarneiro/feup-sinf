import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.scss']
})
export class AccountsReceivableComponent implements OnInit {
  
  private value: number;

  constructor(private saft: SafTService) { }

  ngOnInit() {
    this.saft.get('GeneralAccounts/AccountID/21').subscribe(
      (data: Array<any>) => this.value = (data[0].ClosingDebitBalance - data[0].ClosingCreditBalance).toFixed(1)
    );
  }
}
