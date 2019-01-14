import { Component, OnInit, Input } from '@angular/core';
import { SafTService } from 'src/app/shared/services/safT/saf-t.service';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-sales-per-country-graph',
  templateUrl: './sales-per-country-graph.component.html',
  styleUrls: ['./sales-per-country-graph.component.scss']
})
export class SalesPerCountryGraphComponent implements OnInit {

  private salesByRegion: Map<string, number>;
  private labels: Array<string>;
  private values: Array<number>;

  constructor(private saft: SafTService) {
    this.salesByRegion = new Map<string, number>();
  }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {

    this.saft.get(`sales/sales-by-region?start-date=${frame.begin}&end-date=${frame.end}`).subscribe(
      (data: any) => {
        data.forEach(element => {
          this.salesByRegion.set(element.id, parseInt(element.netTotal))
        });
        this.updateGraphData(this.salesByRegion);
      }
    );

  }

  private updateGraphData(dataMap: Map<string, number>) {
    this.labels = new Array<string>();
    this.values = new Array<number>();

    dataMap.forEach((value: number, key: string) => {
      this.labels.push(key);
      this.values.push(value);
    });
  }

}
