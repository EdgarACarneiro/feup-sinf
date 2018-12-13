import { Injectable } from '@angular/core';

export enum TimeFrame {
  FullYear,
  FirstSemester,
  SecondSemester,
  ThirdSemester,
  FourthSemester
};

@Injectable({
  providedIn: 'root'
})
export class TimeFrameService {

  private timeObj: Object;

  constructor() {
    this.timeObj = {
      begin: "01/01",
      end: "31/12"
    };
  }

  getTimeFrame(): Object {
    return this.timeObj;
  }

  setTimeFrame(frame: TimeFrame) {
    switch (frame) {
      case TimeFrame.FirstSemester:
        this.timeObj = {
          begin: "01/01",
          end: "31/03"
        };
        break;

      case TimeFrame.SecondSemester:
        this.timeObj = {
          begin: "01/04",
          end: "30/06"
        };
        break;

      case TimeFrame.ThirdSemester:
        this.timeObj = {
          begin: "01/07",
          end: "30/09"
        };
        break;

      case TimeFrame.FourthSemester:
        this.timeObj = {
          begin: "01/10",
          end: "31/12"
        };
        break;

      case TimeFrame.FullYear:
      default:
        this.timeObj = {
          begin: "01/01",
          end: "31/12"
        };
    }
  }
}