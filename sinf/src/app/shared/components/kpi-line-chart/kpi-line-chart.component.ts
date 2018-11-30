import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-line-chart',
  templateUrl: './kpi-line-chart.component.html',
  styleUrls: ['./kpi-line-chart.component.scss']
})
export class KpiLineChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() private title: string;

  @Input() private description: string;

  @Input() private data: Array<any> = [];

  @Input() private labels: Array<any> = [];

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: string = 'line';

  public colors: Array<any> = [
    { // red
      backgroundColor: 'rgba(251,64,75,0.2)',
      borderColor: 'rgba(251,64,75,0.8)',
      pointBackgroundColor: 'rgba(251,64,75,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(251,64,75,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // orange
      backgroundColor: 'rgba(251,147,64,0.2)',
      borderColor: 'rgba(251,147,64,0.8)',
      pointBackgroundColor: 'rgba(251,147,64,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(251,147,64,0.8)'
    }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
