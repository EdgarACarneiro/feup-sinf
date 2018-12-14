import { Component, OnInit } from '@angular/core';
import { TimeFrameService } from 'src/app/shared/services/timeFrame/time-frame.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  constructor(public timeframe: TimeFrameService) { }

  ngOnInit() {
  }

}
