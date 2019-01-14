import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-clients',
  templateUrl: './top-clients.component.html',
  styleUrls: ['./top-clients.component.scss']
})
export class TopClientsComponent implements OnInit {

  @Input() numClients: number = 5;

  /**
   * Properties of each client:
   *  - id
   *  - total purchased
   *  - nº purchases
   */
  private clients: Object[] = [];

  constructor(private saft: SafTService, private router: Router) { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
    this.saft.get(`sales/top-clients?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: Array<any>) => this.processData(data)
    );
  }

  private processData(data: Array<any>) {
    // Cleaning the products array
    this.clients = [];

    for (let i = 0; i < data.length && i < this.numClients; ++i) {
      this.clients.push({
        id: data[i].client,
        total: data[i].totalPurchased,
        nPurchases: data[i].nPurchases
      });
    }
  }

  private clickConsumer(id: string) {
    this.router.navigate([`/consumer/${id}`]);
  }
}
