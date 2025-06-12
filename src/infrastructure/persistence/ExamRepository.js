import { Repository } from "../../domain/repositories/Repository.js";

export class ExamRepository extends Repository {
  constructor() {
    super();
  }

  findByPatientId(patientId) {
    const exams = this.findAll();
    return exams.filter((exam) => exam.patientId === patientId);
  }

  findByType(type) {
    const exams = this.findAll();
    return exams.filter((exam) => exam.type.toLowerCase().includes(type.toLowerCase()));
  }

  findByDate(date) {
    const exams = this.findAll();
    return exams.filter(
      (exam) => exam.date.toISOString().split("T")[0] === date.toISOString().split("T")[0]
    );
  }
}
