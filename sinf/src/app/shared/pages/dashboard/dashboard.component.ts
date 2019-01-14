import { Component, OnInit } from '@angular/core';
import { TimeFrameService, TimeFrame } from '../../services/timeFrame/time-frame.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/user/services/authentication/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private frames: Array<TimeFrame>;

  constructor(private timeService: TimeFrameService, private route: ActivatedRoute, private auth: AuthenticationService) {
    this.frames =  Object.values(TimeFrame);
    
    this.timeService.setYear(this.route.snapshot.data.fiscalYear);
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

  logout() {
    this.auth.logout();
  }
}
