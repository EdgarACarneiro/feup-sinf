import { Component, OnInit, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-purchases-graph',
  templateUrl: './purchases-graph.component.html',
  styleUrls: ['./purchases-graph.component.scss']
})
export class PurchasesGraphComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  public values: Array<any> = null;

  public total: number = 0;

  public labels: string[] = [];

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true,
      "SELECT A.Artigo, B.DataDoc, B.TipoDoc, B.Entidade, A.Quantidade, A.PrecUnit FROM  LinhasCompras AS A JOIN CabecCompras AS B ON A.IdCabecCompras = B.Id WHERE B.TipoDoc='ECF'");
  }

  ngOnInit() {
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let res = this.data.DataSet.Table;
      this.total = 0;
      
      let data = new Object;
      for (let el of res) {
        if (el.Artigo == null)
          continue;

        if (data.hasOwnProperty(el.Artigo))
          data[el.Artigo] += el.Quantidade;
        else
          data[el.Artigo] = el.Quantidade;
        
        this.total += el.PrecUnit * el.Quantidade;
      }

      this.values = [{
        data: Object.values(data).filter(val => val > 15),
        label: 'Quantities purchased ( >10 purchases)'
      }];
      this.labels = Object.keys(data).filter(key => data[key] > 10);

      this.resetData();
    }
  }

}
