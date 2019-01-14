import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-value',
  templateUrl: './kpi-value.component.html',
  styleUrls: ['./kpi-value.component.scss']
})
export class KpiValueComponent implements OnInit {

  @Input() title: string;

  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
