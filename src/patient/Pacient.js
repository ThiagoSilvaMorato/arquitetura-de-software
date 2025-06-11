import { Allergy } from "./Allergy.js";
import { Diagnosis } from "./record/Diagnosis.js";

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

  addAllergy(allergy) {
    if (!(allergy instanceof Allergy)) {
      throw new Error("Invalid allergy type.");
    }

    const hasAllergy = this.allergies.some((a) => a.equals(allergy));

    if (!hasAllergy) {
      this.allergies.push(allergy);
      console.log(`Allergy ${allergy.name} added to patient ${this.name}`);
    } else {
      console.log(`Patient ${this.name} already has allergy ${allergy.name}`);
    }
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
