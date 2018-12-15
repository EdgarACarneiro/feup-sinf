import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ebitda',
  templateUrl: './ebitda.component.html',
  styleUrls: ['./ebitda.component.scss']
})
export class EbitdaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('timeframe')
  set timeframe(frame) {
  }

}
