import { AppointmentRepository } from "../infrastructure/persistence/AppointmentRepository.js";
import { DoctorRepository } from "../infrastructure/persistence/DoctorRepository.js";
import { ExamRepository } from "../infrastructure/persistence/ExamRepository.js";
import { PatientRepository } from "../infrastructure/persistence/PatientRepository.js";

export const patientRepository = new PatientRepository();
export const doctorRepository = new DoctorRepository();
export const appointmentRepository = new AppointmentRepository();
export const examRepository = new ExamRepository();
