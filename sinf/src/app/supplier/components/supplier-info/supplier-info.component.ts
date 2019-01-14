import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-supplier-info',
  templateUrl: './supplier-info.component.html',
  styleUrls: ['./supplier-info.component.scss']
})
export class SupplierInfoComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() name: string;

  private supplier: any = {};

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT Fornecedor, Nome, Morada, CpLoc, Pais, Cp, Tel, Fax, TotalDeb, NumContrib, ModoPag, NomeFiscal, EnderecoWeb, EncomendasPendentes FROM Fornecedores WHERE Nome='${this.name}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      this.supplier = this.data.DataSet.Table[0];

      this.resetData();
    }
  }
}
