class WorkingHours {
  constructor() {
    this.hours = [];
  }

  addHours(day, timeSlot) {
    this.hours.push({ day, timeSlot });
  }

  removeHours(day, timeSlot) {
    this.hours = this.hours.filter((h) => h.day !== day && h.timeSlot !== timeSlot);
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

  listHours() {
    return this.hours;
  }
}

module.exports = WorkingHours;
