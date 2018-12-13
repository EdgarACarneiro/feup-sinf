import { Component, OnInit } from '@angular/core';
import { TimeFrameService, TimeFrame } from '../../services/timeFrame/time-frame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public frames: Array<TimeFrame>;

  constructor(private timeService: TimeFrameService) {
    this.frames =  Object.keys(TimeFrame) as Array<TimeFrame>;
  }

  ngOnInit() {
  }

  toogleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
  }

  getTimeFrame(frame: TimeFrame) : string {
    return TimeFrame[frame];
  }

  pivotClick(frame: TimeFrame) {
    console.log(frame);
  }
}
