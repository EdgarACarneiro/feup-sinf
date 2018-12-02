import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-pie-chart',
  templateUrl: './kpi-pie-chart.component.html',
  styleUrls: ['./kpi-pie-chart.component.scss']
})
export class KpiPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() private data: number[];

  @Input() private labels: string[];

  @Input() private title: string;

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: string = 'pie';

  public colors: any[] = [{
    backgroundColor: [
      "rgba(251,64,75,0.5)",
      "rgba(77,83,96,0.4)",
      "rgba(44,130,190,0.4)",
      "rgba(251,147,64,0.5)",
      "rgba(135,120,177,0.4)"
      ]
  }];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
