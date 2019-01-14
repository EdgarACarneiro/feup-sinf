import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.scss']
})
export class ProductDataComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() code: string;

  private product: any = {};

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT A.Artigo, B.Fornecedor, A.Descricao, A.CodBarras FROM Artigo AS A JOIN ArtigoFornecedor AS B ON A.Artigo = B.Artigo WHERE A.Artigo='${this.code}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      this.product = this.data.DataSet.Table[0];

      this.resetData();
    }
  }
}
