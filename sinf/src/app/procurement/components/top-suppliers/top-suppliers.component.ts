import { Component, OnInit, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-top-suppliers',
  templateUrl: './top-suppliers.component.html',
  styleUrls: ['./top-suppliers.component.scss']
})
export class TopSuppliersComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  public values: number[] = null;

  public labels: string[] = [];

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true,
      "SELECT TOP 1000 Fornecedor, Nome, Morada, CpLoc, Tel, TotalDeb FROM V_Fornecedores");
  }

  ngOnInit() {
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let suppliers = this.data.DataSet.Table;
      this.values = [];

      for (let supplier of suppliers) {
        let value = Math.round(supplier.TotalDeb);

        if (value > 0) {
          this.values.push(value / 1000);
          this.labels.push(supplier.Nome);
        }
      }

      this.resetData();
    }
  }
}
