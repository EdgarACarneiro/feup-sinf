import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.scss']
})
export class AccountsReceivableComponent implements OnInit {
  
  private value: string;

  constructor(private saft: SafTService) { }

  ngOnInit() {
  }
  
  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`AccountSum/21?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.value = (data.totalDebit - data.totalCredit).toFixed(1)
    );
  }
}
