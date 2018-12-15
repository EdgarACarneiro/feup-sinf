import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.scss']
})
export class SalesGraphComponent implements OnInit {

  /**
   * Cost of goods sold during the year (12 months);
   */
  private costs: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  /**
   * Net sales during the year (12 months);
   */
  private sales: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private saftService: SafTService) { }

  ngOnInit() {
    // this.saftService.get('SalesInvoices').subscribe(
    //   (data) => this.processSalesInvoices(data)
    // );

    this.saftService.get('AccountSumByMonth/71').subscribe(
      (data) => this.processAccountSumCredit(data)
    );

    this.saftService.get('AccountSumByMonth/61').subscribe(
      (data) => this.processAccountSumDebit(data)
    );
  }

  // private processSalesInvoices(data: any) {
  //   let temp: Array<Object> = data.filter((el) =>
  //     el.InvoiceNo.startsWith('FA')
  //   );

  //   temp.map((el: any) => {
  //     let idx = parseInt(el.InvoiceDate.slice(5, 7)) - 1;
      
  //     this.sales[idx] += parseFloat(el.DocumentTotals.NetTotal);
  //   });
  // }

  private processAccountSumDebit(data: any) {
    for (let i = 1; i <= 12; i++) {
      this.costs[i] = parseInt(data[i.toString()].totalDebit, 10);
    }
  }

  private processAccountSumCredit(data: any) {
    for (let i = 1; i <= 12; i++) {
      this.sales[i] = parseInt(data[i.toString()].totalCredit, 10);
    }
  }

  getChartData() : Array<Object> {
    return [
      { data: this.sales, label: 'Revenue from Sales' },
      { data: this.costs, label: 'Cost of Goods Sold' }
    ];
  }

}
