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

  private currentFrame: TimeFrame;

  private timeFrame;

  private year: number = 0;

  constructor() {
    this.currentFrame = TimeFrame.WholeYear;
    this.timeFrame = {
      begin: "01/01",
      end: "31/12"
    };
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  getTimeObject(): Object {
    return this.timeFrame;
  }

  setTimeFrame(frame: TimeFrame) {
    switch (frame) {
      case TimeFrame.FirstSemester:
        this.setObject("01/01", "31/03", frame);
        break;

      case TimeFrame.SecondSemester:
        this.setObject("01/04", "30/06", frame);
        break;

      case TimeFrame.ThirdSemester:
        this.setObject("01/07", "30/09", frame);
        break;

      case TimeFrame.FourthSemester:
        this.setObject("01/10", "31/12", frame);
        break;

      case TimeFrame.WholeYear:
      default:
        this.setObject("01/01", "31/12", TimeFrame.WholeYear);
        break;
    }
  }

  private setObject(begin: string, end: string, frame: TimeFrame) {
    this.currentFrame = frame;
    this.timeFrame = {
      begin: `${begin}/${this.year}`,
      end: `${end}/${this.year}`
    };
  }

  setYear(year: number) {
    this.year = year;
    this.setTimeFrame(this.currentFrame);
  }
}