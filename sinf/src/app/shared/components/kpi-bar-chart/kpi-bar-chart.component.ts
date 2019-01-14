import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-bar-chart',
  templateUrl: './kpi-bar-chart.component.html',
  styleUrls: ['./kpi-bar-chart.component.scss']
})
export class KpiBarChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() private data: any[] = [];

  @Input() private labels: string[] = [];

  @Input() private title: string = '';

  public options: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'bottom'
    }
  };

  public type: string = 'bar';

  public colors: Array<any> = [
    { // red
      backgroundColor: 'rgba(251,64,75,0.5)',
      borderColor: 'rgba(251,64,75,0.8)',
      pointBackgroundColor: 'rgba(251,64,75,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(251,64,75,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,0.8)',
      pointBackgroundColor: 'rgba(77,83,96,0.8)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,0.8)'
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
