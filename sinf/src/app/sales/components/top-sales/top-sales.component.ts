import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-sales',
  templateUrl: './top-sales.component.html',
  styleUrls: ['./top-sales.component.scss']
})
export class TopSalesComponent implements OnInit {

  @Input() numSales: number = 5;

  /**
   * Properties of each top product:
   *  - net total
   *  - date
   *  - customer
   *  - products
   */
  private sales: Object[] = [];

  constructor(private saft: SafTService, private router: Router) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`sales/top-sales?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: Array<any>) => this.processData(data)
    );
  }

  private processData(data: Array<any>) {
    // Cleaning the products array
    this.sales = [];

    for (let i = 0; i < data.length && i < this.numSales; ++i) {
      this.sales.push({
        netTotal: data[i].NetTotal,
        customer: data[i].Customer,
        date: data[i].Date,
        products: data[i].Products
      });
    }
  }
}
