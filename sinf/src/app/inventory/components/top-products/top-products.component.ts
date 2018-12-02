import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';

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

  constructor(private saft: SafTService) { }

  ngOnInit() {
    this.saft.get('sales/top-selling-products').subscribe(
      (data: Array<any>) => this.processData(data)
    );
  }

  private processData(data: Array<any>) {
    for (let i = 0; i < data.length && i < this.numProducts; ++i) {
      this.products.push({
        name: data[i].ProductDescription,
        unitSold: data[i].Quantity,
        price: data[i].UnitPrice
      });
    }
  }
}
