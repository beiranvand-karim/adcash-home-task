import {IMonth} from '../interfaces/i-month';
import {MonthType} from '../enums/month-type.enum';

export class Month implements IMonth {

  id: MonthType;
  daysCount: number;

  constructor(id: MonthType, daysCount: number) {
    this.id = id;
    this.daysCount = daysCount;
  }

  public static indexToMonthType(month: number): Month {


    let m: Month;

    switch (month) {

      case 0:
        m = new Month(MonthType.January, 31);
        break;
      case 1:
        m = new Month(MonthType.February, 28);
        break;
      case 2:
        m = new Month(MonthType.March, 31);
        break;
      case 3:
        m = new Month(MonthType.April, 30);
        break;
      case 4:
        m = new Month(MonthType.May, 31);
        break;
      case 5:
        m = new Month(MonthType.June, 30);
        break;
      case 6:
        m = new Month(MonthType.July, 31);
        break;
      case 7:
        m = new Month(MonthType.August, 31);
        break;
      case 8:
        m = new Month(MonthType.September, 30);
        break;
      case 9:
        m = new Month(MonthType.October, 31);
        break;
      case 10:
        m = new Month(MonthType.November, 30);
        break;
      case 11:
        m = new Month(MonthType.December, 31);
        break;

    }


    if ( m === undefined) {
      throw Error;
    }

    return m;

  }


  public static MonthByIndex(month: number): string {


    let m: string;

    switch (month) {

      case 0:
        m = 'January';
        break;
      case 1:
        m = 'February';
        break;
      case 2:
        m = 'March';
        break;
      case 3:
        m = 'April';
        break;
      case 4:
        m = 'May';
        break;
      case 5:
        m = 'June';
        break;
      case 6:
        m = 'July';
        break;
      case 7:
        m = 'August';
        break;
      case 8:
        m = 'September';
        break;
      case 9:
        m = 'October';
        break;
      case 10:
        m = 'October';
        break;
      case 11:
        m = 'December';
        break;

    }


    if ( m === undefined) {
      throw Error;
    }

    return m;

  }
}


export const months = {
  january: new Month(MonthType.January, 31),
  february: new Month(MonthType.February, 28),
  march: new Month(MonthType.March, 31),
  april: new Month(MonthType.April, 31),
  may: new Month(MonthType.May, 31),
  june: new Month(MonthType.June, 30),
  july: new Month(MonthType.July, 31),
  August: new Month(MonthType.August, 31),
  september: new Month(MonthType.September, 31),
  october: new Month(MonthType.October, 31),
  november: new Month(MonthType.November, 30),
  december: new Month(MonthType.December, 31)
};
