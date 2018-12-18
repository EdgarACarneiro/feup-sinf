import { Component, OnInit, DoCheck } from '@angular/core';
import { WebApiRequesterComponent } from 'src/app/shared/components/web-api-requester/web-api-requester.component';
import { webApiService } from 'src/app/shared/services/webApi/web-api.service';

@Component({
  selector: 'app-merchandise-delay',
  templateUrl: './merchandise-delay.component.html',
  styleUrls: ['./merchandise-delay.component.scss']
})
export class MerchandiseDelayComponent extends WebApiRequesterComponent implements OnInit, DoCheck {

  public values: Array<number> = null;

  private boundaries: Array<any> = [];

  constructor(webApi: webApiService) {
    super(webApi, 'Administrador/Consulta', true,
      "SELECT DATEDIFF(DAY, C.DataEntrega, GETDATE()) AS Atraso, count(*) as Total FROM CabecCompras AS A JOIN CabecComprasStatus AS B ON A.Id = B.IdCabecCompras JOIN LinhasCompras AS C ON A.Id = C.IdCabecCompras WHERE A.TipoDoc = 'ECF' AND B.Estado = 'P' AND A.TotalMerc > 0 AND C.Artigo != 'NULL' GROUP BY DATEDIFF(DAY, C.DataEntrega, GETDATE())"
    );

    this.boundaries = [
      {
        begin: 0,
        end: 30
      },
      {
        begin: 31,
        end: 90,
      },
      {
        begin: 91,
        end: 180
      },
      {
        begin: 181,
        end: 365
      },
      {
        begin: 366
      }
    ];
  }

  ngOnInit() {
    this.fetchData();
  }

  ngDoCheck() {
    if (this.data !== undefined) {
      let res = this.data.DataSet.Table;
      this.values = [0, 0, 0, 0, 0];

      for (let el of res) {
        for (let i in this.boundaries) {
          if (this.boundaries[i].begin <= el.Atraso && el.Atraso <= this.boundaries[i].end) {
            this.values[i] += el.Total;
            break;
          }
        }
      }

      this.resetData();
    }
  }
}
