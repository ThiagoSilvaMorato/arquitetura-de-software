import { Address } from "./shared/Address.js";
import { EmergencyContact } from "./shared/EmergencyContact.js";

import { Appointment } from "./patient/Appointment.js";
import { AppointmentRepository } from "./patient/AppointmentRepository.js";

import { Exam } from "./patient/Exam.js";
import { ExamRepository } from "./patient/ExamRepository.js";

import { Patient } from "./patient/Pacient.js";
import { PatientRepository } from "./patient/PatientRepository.js";

import { DoctorRepository } from "./doctor/DoctorRepository.js";
import { Doctor } from "./doctor/Doctor.js";

const address = new Address("Rua das Flores", "123", "São Paulo", "São Paulo", "11111111");

const emergencyContact = new EmergencyContact("Maria Silva", "(11) 88888-88888");

const patient = new Patient(
  1,
  "123-456-789-00",
  "João Silva",
  "1990-01-01",
  "Masculino",
  "O+",
  address,
  "(11) 99999-9999",
  "joao.silva@email.com",
  emergencyContact
);

const doctor = new Doctor(1, "123456", "Dr. Ana Souza", ["Cardiology"], "(11) 99999-9999");

const appointment = new Appointment(
  1,
  new Date(),
  patient,
  doctor,
  "Checkup",
  "Scheduled",
  "Regular checkup"
);

const exam = new Exam(
  1,
  "Blood Test",
  "Normal",
  new Date(2025, 10, 10),
  "Lab A",
  "Dr. Smith",
  patient
);
//-----------------------------
const patientRepository = new PatientRepository();
const doctorRepository = new DoctorRepository();
const appointmentRepository = new AppointmentRepository();
const examRepository = new ExamRepository();
//-----------------------------
doctorRepository.add(doctor.id, doctor);
patientRepository.add(patient.id, patient);
appointmentRepository.add(appointment.id, appointment); // Quem deve agendar é o paciente
examRepository.add(exam.id, exam);
//-----------------------------
const foundPatient = patientRepository.findById(1);
const foundDoctor = doctorRepository.findById(1);
const foundAppointment = appointmentRepository.findById(1);
const foundExam = examRepository.findById(1);

console.log(doctorRepository.findBySpecialty("Cardiology"));
