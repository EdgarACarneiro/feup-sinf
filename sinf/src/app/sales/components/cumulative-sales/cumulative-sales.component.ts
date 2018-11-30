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
  private grossResult: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
      this.grossResult[parseInt(el.InvoiceDate.slice(5, 7)) - 1] += parseFloat(el.DocumentTotals.GrossTotal)
    );

    for(let i : number = 1; i < this.grossResult.length; ++i )
      this.grossResult[i] += this.grossResult[i-1];
  }

  getChartData(): Array<Object> {
    return [
      { data: this.grossResult, label: 'Cumulative Gross Sales' }
    ];
  }

}
