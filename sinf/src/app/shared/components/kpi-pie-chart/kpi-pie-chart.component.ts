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

  @Input() private data: number[] = [300, 500, 100];

  @Input() private labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: string = 'pie';

  private colors: any[] = [{
    backgroundColor: [
      "rgba(251,64,75,0.5)",
      "rgba(77,83,96,0.5)",
      "rgba(251,147,64,0.5)"]
  }];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
