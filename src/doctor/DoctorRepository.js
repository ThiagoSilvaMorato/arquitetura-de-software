import { Repository } from "../shared/Repository.js";

export class DoctorRepository extends Repository {
  constructor() {
    super();
  }

  findByName(name) {
    const doctors = this.findAll();
    return doctors.filter((doctor) => doctor.name === name);
  }

  findBySpecialty(specialty) {
    const doctors = this.findAll();
    return doctors.filter((doctor) => doctor.especialties.includes(specialty));
  }
}
