import { Component, OnInit, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-top-clients',
  templateUrl: './top-clients.component.html',
  styleUrls: ['./top-clients.component.scss']
})
export class TopClientsComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  private clients : Array<number>;

  constructor(webApi : webApiService) {
    super(webApi, 'Administrador/Consulta', true,
      "SELECT TOP 1000 Fornecedor, Nome, Morada, CpLoc, Tel, TotalDeb FROM V_Fornecedores");
  }

  ngOnInit() {
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      console.log(this.data);

      this.data = undefined;
    }
  }

}
