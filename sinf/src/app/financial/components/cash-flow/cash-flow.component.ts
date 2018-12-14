import { Component, OnInit, Input } from '@angular/core';
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
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`AccountSum/11?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.cashFlow = (data.totalDebit - data.totalCredit).toFixed(1)
    );
  }

}