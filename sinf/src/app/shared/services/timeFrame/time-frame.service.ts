import { Injectable } from '@angular/core';

export enum TimeFrame {
  WholeYear = 'Whole Year',
  FirstSemester = 'First Semester',
  SecondSemester = 'Second Semester',
  ThirdSemester = 'Third Semester',
  FourthSemester = 'Fourth Semester'
};

@Injectable({
  providedIn: 'root'
})
export class TimeFrameService {

  private timeFrame: Object;

  constructor() {
    this.timeFrame = {
      begin: "01/01",
      end: "31/12"
    };
  }

  getTimeFrame(): Object {
    return this.timeFrame;
  }

  setTimeFrame(frame: TimeFrame) {
    switch (frame) {
      case TimeFrame.FirstSemester:
        this.timeFrame = {
          begin: "01/01",
          end: "31/03"
        };
        break;

      case TimeFrame.SecondSemester:
        this.timeFrame = {
          begin: "01/04",
          end: "30/06"
        };
        break;

      case TimeFrame.ThirdSemester:
        this.timeFrame = {
          begin: "01/07",
          end: "30/09"
        };
        break;

      case TimeFrame.FourthSemester:
        this.timeFrame = {
          begin: "01/10",
          end: "31/12"
        };
        break;

      case TimeFrame.WholeYear:
      default:
        this.timeFrame = {
          begin: "01/01",
          end: "31/12"
        };
    }
  }
}