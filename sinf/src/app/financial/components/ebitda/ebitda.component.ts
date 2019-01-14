import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-ebitda',
  templateUrl: './ebitda.component.html',
  styleUrls: ['./ebitda.component.scss']
})
export class EbitdaComponent implements OnInit {

  private earningsSales: number;
  private earningsServices: number;

  private expensesCOGS: number;
  private expensesServices: number;
  private expensesPersonnel: number;

  constructor(private saft: SafTService) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`AccountSum/71?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.earningsSales = data.totalCredit - data.totalDebit
    );
   
    this.saft.get(`AccountSum/72?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.earningsServices = data.totalCredit - data.totalDebit
    );

    this.saft.get(`AccountSum/61?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.expensesCOGS = data.totalDebit - data.totalCredit
    );

    this.saft.get(`AccountSum/62?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.expensesServices = data.totalDebit - data.totalCredit
    );

    this.saft.get(`AccountSum/63?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.expensesPersonnel = data.totalDebit - data.totalCredit
    );
  }

}
