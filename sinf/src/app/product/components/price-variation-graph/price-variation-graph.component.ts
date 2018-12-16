import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-price-variation-graph',
  templateUrl: './price-variation-graph.component.html',
  styleUrls: ['./price-variation-graph.component.scss']
})
export class PriceVariationGraphComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() code: string;

  private prices: Array<any> = null;

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT Artigo, PVP1, PVP2, PVP3, PVP4, PVP5, PVP6 FROM ArtigoMoeda WHERE Artigo='${this.code}'`
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let res = this.data.DataSet.Table[0];
      this.prices = [{
        data: [res.PVP1, res.PVP2, res.PVP3, res.PVP4, res.PVP5, res.PVP6],
        label: `Price variation of ${this.code}`
      }];

      this.resetData();
    }
  }
}

