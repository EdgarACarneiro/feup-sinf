import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-acounts-payable',
  templateUrl: './acounts-payable.component.html',
  styleUrls: ['./acounts-payable.component.scss']
})
export class AcountsPayableComponent implements OnInit {

  private value: number;

  constructor(private SaftService: SafTService) { }

  ngOnInit() {
    this.SaftService.get('GeneralAccounts/AccountID/22').subscribe(
      (data : Array<any>) => this.value = - (data[0].ClosingDebitBalance - data[0].ClosingCreditBalance)
    );
  }

}
