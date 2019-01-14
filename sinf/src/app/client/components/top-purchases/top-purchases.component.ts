import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-purchases',
  templateUrl: './top-purchases.component.html',
  styleUrls: ['./top-purchases.component.scss']
})
export class TopPurchasesComponent implements OnInit {

  @Input() id: string;

  @Input() numProducts: number = 10;

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
    this.saft.get(`sales/top-purchases/${this.id}?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => this.processData(data.products)
    );
  }

  private processData(data: Array<any>) {
    // Cleaning the products array
    this.products = [];
    console.log(data);

    for (let i = 0; i < data.length && i < this.numProducts; ++i) {
      this.products.push({
        code: data[i].ProductCode,
        name: data[i].ProductDescription,
        unitSold: data[i].Quantity
      });
    }
  }

  private clickProduct(code: string) {
    this.router.navigate([`/product/${code}`]);
  }
}
