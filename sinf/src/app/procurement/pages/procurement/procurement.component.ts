import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurement',
  templateUrl: './procurement.component.html',
  styleUrls: ['./procurement.component.scss']
})
export class ProcurementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Pie
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  // lineChart
  public lineChartData: Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';

}
