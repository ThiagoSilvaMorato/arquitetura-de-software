import { WorkingHours } from "../value-objects/WorkingHours.js";

export class Doctor {
  constructor(id, rcm, name, especialties, phone) {
    this.id = id;
    this.rcm = rcm;
    this.name = name;
    this.especialties = especialties;
    this.phone = phone;
    this.workingHours = new WorkingHours();
  }
}
