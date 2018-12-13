import { Component, OnInit } from '@angular/core';
import { TimeFrameService, TimeFrame } from '../../services/timeFrame/time-frame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private frames: Array<TimeFrame>;

  constructor(private timeService: TimeFrameService) {
    this.frames =  Object.values(TimeFrame);
  }

  ngOnInit() {
  }

  toogleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
  }

  getCurrentFrame(): TimeFrame {
    return this.timeService.getCurrentFrame();
  }

  pivotClick(frame: TimeFrame) {
    this.timeService.setTimeFrame(frame);
  }
}
