import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-product-values',
  templateUrl: './product-values.component.html',
  styleUrls: ['./product-values.component.scss']
})
export class ProductValuesComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() code: string;

  private avgCost: number = 0;

  private avgPvp: number = 0;

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT A.PCMedio, C.PVP1, C.PVP2, C.PVP3, C.PVP4, C.PVP5, C.PVP6 FROM Artigo AS A JOIN ArtigoMoeda AS C ON A.Artigo = C.Artigo WHERE A.Artigo='${this.code}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let res = this.data.DataSet.Table[0];

      let prices = [res.PVP1, res.PVP2, res.PVP3, res.PVP4, res.PVP5, res.PVP6];
      let filtered = prices.filter((el) => el > 0);

      this.avgCost = res.PCMedio;
      this.avgPvp = filtered.reduce((acc, el) => acc + el) / filtered.length;

      this.resetData();
    }
  }
}
