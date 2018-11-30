import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-bar-chart',
  templateUrl: './kpi-bar-chart.component.html',
  styleUrls: ['./kpi-bar-chart.component.scss']
})
export class KpiBarChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() private data: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  @Input() private labels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

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
