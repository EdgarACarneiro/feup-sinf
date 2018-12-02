import { Component, OnInit, Input } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent extends WebApiRequesterComponent implements OnInit {

  @Input() code: string;

  private product: any = {};

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT Artigo, Descricao, PCMedio as PrecoMedio, PCUltimo as PrecoUltimo FROM Artigo WHERE Artigo='${this.code}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined)
      this.product = this.data.DataSet.Table[0];

    this.resetData();
  }
}
