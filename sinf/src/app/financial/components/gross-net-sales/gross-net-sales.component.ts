import { Component, OnInit } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

@Component({
  selector: 'app-gross-net-sales',
  templateUrl: './gross-net-sales.component.html',
  styleUrls: ['./gross-net-sales.component.scss']
})
export class GrossNetSalesComponent implements OnInit {

  /**
   * Gross values during the year (12 months);
   */
  private grossResult: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  /**
   * Net values during the year (12 months);
   */
  private netResult: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

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
    console.log(temp);

    temp.map((el: any) => {
      let idx = parseInt(el.InvoiceDate.slice(5, 7)) - 1;
      
      this.grossResult[idx] += parseFloat(el.DocumentTotals.GrossTotal);
      this.netResult[idx] += parseFloat(el.DocumentTotals.NetTotal);
    });
  }

}
