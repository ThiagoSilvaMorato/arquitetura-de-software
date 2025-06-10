const WorkingHours = require("./workingHours");

class Doctor {
  constructor(id, rcm, name, especialties, phone) {
    this.id = id;
    this.rcm = rcm;
    this.name = name;
    this.especialties = especialties;
    this.phone = phone;
    this.workingHours = new WorkingHours();
  }

  addWorkingHours(day, timeSlot) {
    this.workingHours.addHours(day, timeSlot);
  }

  removeWorkingHours(day, timeSlot) {
    this.workingHours.removeHours(day, timeSlot);
  }

  listWorkingHours() {
    return this.workingHours.listHours();
  }
}

module.exports = Doctor;
