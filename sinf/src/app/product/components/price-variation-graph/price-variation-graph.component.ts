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

  private labels: Array<string> = [];

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
      
      let data = [];
      this.addValue(data, res.PVP1);
      this.addValue(data, res.PVP2);
      this.addValue(data, res.PVP3);
      this.addValue(data, res.PVP4);
      this.addValue(data, res.PVP5);
      this.addValue(data, res.PVP6);

      this.prices = [{
        data: data,
        label: `Price variation of ${this.code}`
      }];

      this.labels = [];
      for (let i in data)
        this.labels.push(`PRice #${i+1}`);

      this.resetData();
    }
  }

  private addValue(data: Array<number>, value: number) {
    if (value > 0) {
      data.push(value);
    }
  }
}

