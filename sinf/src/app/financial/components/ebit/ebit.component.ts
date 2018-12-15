import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ebit',
  templateUrl: './ebit.component.html',
  styleUrls: ['./ebit.component.scss']
})
export class EbitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
  }

}
