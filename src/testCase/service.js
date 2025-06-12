import { AppointmentService } from "../application/services/AppointmentService.js";
import { DoctorAvailabilityService } from "../domain/services/DoctorAvailabilityService.js";
import { DoctorService } from "../domain/services/DoctorService.js";
import { ExamService } from "../domain/services/ExamService.js";
import { PatientService } from "../domain/services/PatientService.js";
import { NotificationService } from "../infrastructure/notification/NotificationService.js";

import {
  patientRepository,
  doctorRepository,
  appointmentRepository,
  examRepository,
} from "./repositories.js";

export const doctorService = new DoctorService(doctorRepository);
export const examService = new ExamService(examRepository);
export const patientService = new PatientService(patientRepository);
export const doctorAvailabilityService = new DoctorAvailabilityService(
  appointmentRepository,
  doctorService
);

export const notificationService = new NotificationService();
export const appointmentService = new AppointmentService(
  patientService,
  doctorService,
  appointmentRepository,
  doctorAvailabilityService,
  notificationService
);
