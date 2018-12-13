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
      begin: "01-01",
      end: "12-31"
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
        this.setObject("01-01", "03-31", frame);
        break;

      case TimeFrame.SecondSemester:
        this.setObject("04-01", "06-30", frame);
        break;

      case TimeFrame.ThirdSemester:
        this.setObject("07-01", "09-30", frame);
        break;

      case TimeFrame.FourthSemester:
        this.setObject("10-01", "12-31", frame);
        break;

      case TimeFrame.WholeYear:
      default:
        this.setObject("01-01", "12-31", TimeFrame.WholeYear);
        break;
    }
  }

  private setObject(begin: string, end: string, frame: TimeFrame) {
    this.currentFrame = frame;
    this.timeFrame = {
      begin: `${this.year}-${begin}`,
      end: `${this.year}-${end}`
    };
  }

  setYear(year: number) {
    this.year = year;
    this.setTimeFrame(this.currentFrame);
  }
}