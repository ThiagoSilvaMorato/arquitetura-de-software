import { Diagnosis } from "./src/patient/record/Diagnosis.js";
import { Treatment } from "./Treatment.js";
import { Medication } from "./Medication.js";

export class MedicalRecord {
  constructor() {
    this.diagnosis = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    if (!(diagnosis instanceof Diagnosis)) {
      throw new Error("Invalid diagnosis object.");
    }

    this.diagnosis.push(diagnosis);
  }

  addTreatment(treatment) {
    if (!(treatment instanceof Treatment)) {
      throw new Error("Invalid treatment object.");
    }

    this.treatments.push(treatment);
  }

  addMedication(medication) {
    if (!(medication instanceof Medication)) {
      throw new Error("Invalid medication object.");
    }

    this.medications.push(medication);
  }

  equals(otherReport) {
    const sameDiagnosis =
      this.diagnosis.length === otherReport.diagnosis.length &&
      this.diagnosis.every((d, index) => d.equals(otherReport.diagnosis[index]));

    const sameTreatments =
      this.treatments.length === otherReport.treatments.length &&
      this.treatments.every((t, index) => t.equals(otherReport.treatments[index]));

    const sameMedications =
      this.medications.length === otherReport.medications.length &&
      this.medications.every((m, index) => m.equals(otherReport.medications[index]));

    return sameDiagnosis && sameTreatments && sameMedications;
  }
}
