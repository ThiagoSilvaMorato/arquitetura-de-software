import { Address } from "./shared/Address.js";
import { EmergencyContact } from "./shared/EmergencyContact.js";

import { Patient } from "./patient/Pacient.js";
import { PatientRepository } from "./patient/PatientRepository.js";

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

const patientRepository = new PatientRepository();

patientRepository.add(patient.id, patient);

// patientRepository.delete(1);

const patient2 = new Patient(
  1,
  "123-456-789-00",
  "Thiago Morato",
  "1990-01-01",
  "Masculino",
  "O+",
  address,
  "(11) 99999-9999",
  "joao.silva@email.com",
  emergencyContact
);

patientRepository.update(patient.id, patient2);

const foundPatient = patientRepository.findById(1);

console.log("Found Patient:", patientRepository.findAll());
