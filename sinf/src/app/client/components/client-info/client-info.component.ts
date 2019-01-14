import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  @Input() id: string;

  private client: any = {};

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true);
  }

  ngOnInit() {
    this.body = `SELECT Cliente, Nome, Fac_Mor, Fac_Local, Pais, Fac_Cp, Fac_Tel, Fac_Fax, LimiteCred, TotalDeb, NumContrib, Situacao, NomeFiscal, EnderecoWeb FROM Clientes WHERE NumContrib='${this.id}'`;
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      this.client = this.data.DataSet.Table[0];

      this.resetData();
    }
  }
}
