export class Patient {
  constructor(
    id,
    cpf,
    name,
    birthDate,
    gender,
    bloodType,
    address,
    phone,
    email,
    emergencyContact
  ) {
    this.id = id;
    this.cpf = cpf;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;

    this.allergies = [];
    this.medicalRecord = [];
    this.appointments = [];
    this.exams = [];
  }

  addExam(exam) {
    if (!(exam instanceof Exam)) {
      throw new Error("Invalid exam type.");
    }

    console.log(`Exam ${exam.type} added with result: ${exam.result}`);
  }

  scheduleAppointment(appointment) {
    if (!(appointment instanceof Appointment)) {
      throw new Error("Invalid appointment type.");
    }

    const hasConflict = this.appointments.some((appt) => appt.hasConflict(appointment));

    if (!hasConflict) {
      this.appointments.push(appointment);
      console.log(`Appointment scheduled for patient ${this.name} on ${appointment.date}`);
    } else {
      console.log(`Appointment conflict for patient ${this.name} on ${appointment.date}`);
    }
  }
}
