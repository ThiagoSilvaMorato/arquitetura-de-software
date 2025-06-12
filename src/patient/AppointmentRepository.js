import { Repository } from "../shared/Repository.js";

export class AppointmentRepository extends Repository {
  constructor() {
    super();
  }

  findByPatientId(patientId) {
    const appointments = this.findAll();
    return appointments.filter((appointment) => appointment.patientId === patientId);
  }

  findByDoctorId(doctorId) {
    const appointments = this.findAll();
    return appointments.filter((appointment) => appointment.doctorId === doctorId);
  }

  findByStatus(status) {
    const appointments = this.findAll();
    return appointments.filter((appointment) => appointment.status === status);
  }
}
