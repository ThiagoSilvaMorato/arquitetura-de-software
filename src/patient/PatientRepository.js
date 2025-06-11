import { Repository } from "../shared/Repository.js";

export class PatientRepository extends Repository {
  constructor() {
    super();
  }

  findByName(name) {
    const patients = this.findAll();
    return patients.filter((patient) => patient.name === name);
  }

  findByBloodType(bloodType) {
    const patients = this.findAll();
    return patients.filter((patient) => patient.bloodType === bloodType);
  }
}
