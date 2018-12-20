import { Component, OnInit } from '@angular/core';
import { TimeFrameService } from 'src/app/shared/services/timeFrame/time-frame.service';

@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.scss']
})
export class FinancialComponent implements OnInit {

  constructor(public timeframe: TimeFrameService) { }

  ngOnInit() {
  }

}
