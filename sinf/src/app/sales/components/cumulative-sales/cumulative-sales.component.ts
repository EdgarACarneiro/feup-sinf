import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-cumulative-sales',
  templateUrl: './cumulative-sales.component.html',
  styleUrls: ['./cumulative-sales.component.scss']
})
export class CumulativeSalesComponent implements OnInit {

  /**
   * Cumulative Net values during the year (12 months);
   */
  private cumulative: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  /**
   * Cumulative Net values during the year (12 months);
   */
  private monthlyGross: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  constructor(private saftService: SafTService) { }

  ngOnInit() {
    this.saftService.get('SalesInvoices').subscribe(
      (data) => this.processData(data)
    );
  }

  private processData(data: any) {
    let temp: Array<Object> = data.filter((el) =>
      el.InvoiceNo.startsWith('FA')
    );

    temp.map((el: any) =>
      this.monthlyGross[parseInt(el.InvoiceDate.slice(5, 7)) - 1] += parseFloat(el.DocumentTotals.GrossTotal)
    );
    this.cumulative[0] = this.monthlyGross[0];
    
    for (let i: number = 1; i < this.cumulative.length; ++i)
       this.cumulative[i] = this.cumulative[i - 1] + this.monthlyGross[i];
  }

  getChartData(): Array<Object> {
    return [
      { 
        data: this.cumulative, 
        label: 'Cumulative Sales'
      },
      {
        data: this.monthlyGross,
        label: 'Monthly Sales'
      }
    ];
  }

}
