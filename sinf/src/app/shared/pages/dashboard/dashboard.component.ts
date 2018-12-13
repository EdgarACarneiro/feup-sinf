import { Component, OnInit } from '@angular/core';
import { TimeFrameService, TimeFrame } from '../../services/timeFrame/time-frame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private frames: Array<TimeFrame>;
  
  private timeObj;

  constructor(private timeService: TimeFrameService) {
    this.frames =  Object.values(TimeFrame);

    this.timeObj = this.timeService.getTimeObject();
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
  
    this.timeObj = this.timeService.getTimeObject();
  }
}
