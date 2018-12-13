import { Component, OnInit } from '@angular/core';
import { TimeFrameService, TimeFrame } from '../../services/timeFrame/time-frame.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private frames: Array<string>;
  private activeFrame: string;

  private timeObj;

  constructor(private timeService: TimeFrameService) {
    this.frames =  Object.keys(TimeFrame);

    this.timeObj = this.timeService.getTimeFrame();
  }

  ngOnInit() {
  }

  toogleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
  }

  getTimeFrame(frame: string) : TimeFrame {
    return TimeFrame[frame];
  }

  pivotClick(frame: TimeFrame) {
    this.timeService.setTimeFrame(this.getTimeFrame(frame));
    this.activeFrame = frame;
  
    this.timeObj = this.timeService.getTimeFrame();
  }
}
