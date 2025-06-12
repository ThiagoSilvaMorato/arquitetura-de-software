export class WorkingHours {
  constructor() {
    this.hours = [];
  }

  equals(otherWorkingHours) {
    if (this.hours.length !== otherWorkingHours.hours.length) {
      return false;
    }

    for (let i = 0; i < this.hours.length; i++) {
      const thisHour = this.hours[i];
      const otherHour = otherWorkingHours.hours[i];

      if (thisHour.day !== otherHour.day || thisHour.timeSlot !== otherHour.timeSlot) {
        return false;
      }
    }

    return this.hours.every((hour, index) => {
      const other = otherWorkingHours.hour[index];

      return hour.day === other.day && hour.timeSlot === other.timeSlot;
    });
  }
}
