const { Allergy } = require("./allergy");
const { Diagnosis } = require("./dagnosis");

class Patient {
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

  addAllergy(type) {
    const allergy = new Allergy(type);
    this.allergies.push(allergy);
    console.log(`Allergy ${type} added to patient ${this.name}`);
  }

  addDiagnosis(diagnosis) {
    const diagnosis = new Diagnosis(diagnosis);
    this.medicalRecord.addDiagnosis(diagnosis);
    console.log(`Diagnosis added to medical record of patient ${this.name}`);
  }

  addMedication(medication) {
    const medication = new Medication(medication);
    this.medicalRecord.addMedication(medication);
    console.log(`Medication ${medication.name} added to medical record of patient ${this.name}`);
  }

  addTreatment(treatment) {
    const treatment = new Treatment(treatment);
    this.medicalRecord.addTreatment(treatment);
    console.log(`Treatment added to medical record of patient ${this.name}`);
  }

  addExam(exam) {
    this.exams.push(exam);

    console.log(`Exam ${exam.name} added with result: ${exam.result}`);
  }

  scheduleAppointment(appointment) {
    const appointmentAtSameTime = this.appointments.some(
      (a) => a.date.getTime() === appointment.date.getTime()
    );

    if (appointmentAtSameTime) {
      console.log("Patient already has an appointment scheduled for this time.");
      return;
    }
    this.appointments.push(appointment);

    console.log(`Appointment scheduled for ${appointment.date} with ${appointment.doctor.name}`);
  }
}

module.exports = Patient;
