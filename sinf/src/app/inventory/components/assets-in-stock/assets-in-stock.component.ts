import { Component, OnInit, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-assets-in-stock',
  templateUrl: './assets-in-stock.component.html',
  styleUrls: ['./assets-in-stock.component.scss']
})
export class AssetsInStockComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  public values: Array<any> = null;

  public labels: string[] = [];

  public total: number = 0;

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true,
      "SELECT V_INV_ArtigoArmazem.Artigo, Armazem , SUM(StkActual) as StkArmazem, AVG(PVP1) as PVP1 FROM V_INV_ArtigoArmazem JOIN [ArtigoMoeda] on V_INV_ArtigoArmazem.Artigo = ArtigoMoeda.Artigo GROUP BY V_INV_ArtigoArmazem.Artigo, Armazem"
    );
  }

  ngOnInit() {
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let res = this.data.DataSet.Table;
      let data = new Object;

      for (let el of res) {
        if (data.hasOwnProperty(el.Armazem))
          data[el.Armazem] += el.PVP1 * el.StkArmazem;
        else {
          data[el.Armazem] = el.StkArmazem * el.PVP1;
        }

        this.total += el.StkArmazem * el.PVP1;
      }

      let sortedKeys = Object.keys(data).sort((a, b) => data[b] - data[a]);

      let sortedData = {};
      for (let i: number = 0; i < sortedKeys.length && i < 5; ++i)
        sortedData[sortedKeys[i]] = Math.round(data[sortedKeys[i]]);

      this.values = [{
        data: Object.values(sortedData),
        label: `Wharehouses`
      }];
      this.labels = Object.keys(sortedData);

      this.resetData();
    }
  }
}
  