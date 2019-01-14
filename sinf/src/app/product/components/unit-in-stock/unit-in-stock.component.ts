import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-unit-in-stock',
  templateUrl: './unit-in-stock.component.html',
  styleUrls: ['./unit-in-stock.component.scss']
})
export class UnitInStockComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() code: string;

  private units: number;

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT Artigo, Armazem, ISNULL(StkActual, 0) AS StkActual FROM V_INV_ArtigoArmazem WHERE Artigo='${this.code}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let temp = this.data.DataSet.Table.filter((el) => el.StkActual > 0);
      this.units = temp.reduce((acc, el) => acc + el.StkActual, 0);

      this.resetData();
    }
  }

}
