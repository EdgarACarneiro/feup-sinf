import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-ebit',
  templateUrl: './ebit.component.html',
  styleUrls: ['./ebit.component.scss']
})
export class EbitComponent implements OnInit {

  private earnings: number;
  private expensesCOGS: number;
  private expensesServices: number;
  private expensesPersonnel: number;
  private expensesDepreciationAndAmortization: number;

  constructor(private saft: SafTService) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`AccountSum/7?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.earnings = data.totalCredit - data.totalDebit
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

    this.saft.get(`AccountSum/64?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.expensesDepreciationAndAmortization = data.totalDebit - data.totalCredit
    );
  }

}
