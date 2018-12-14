import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['../../pages/inventory/inventory.component.scss']
})
export class TopProductsComponent implements OnInit {

  @Input() numProducts: number = 15;

  /**
   * Properties of each top product:
   *  - name
   *  - units sold
   *  - unit price
   */
  private products: Object[] = [];

  constructor(private saft: SafTService, private router: Router) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`sales/top-selling-products?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: Array<any>) => this.processData(data)
    );
  }

  private processData(data: Array<any>) {
    for (let i = 0; i < data.length && i < this.numProducts; ++i) {
      this.products.push({
        code: data[i].ProductCode,
        name: data[i].ProductDescription,
        unitSold: data[i].Quantity,
        price: Math.round(data[i].UnitPrice)
      });
    }
  }

  private clickProject(code: string) {
    this.router.navigate([`/product/${code}`]);
  }
}
