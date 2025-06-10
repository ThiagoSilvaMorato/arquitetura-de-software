const Paciente = require("./paciente");
const Consulta = require("./consulta");
const Exame = require("./exame");
const Prontuario = require("./prontuario");
const Medico = require("./medico");

const paciente1 = new Paciente(
  1,
  "123.456.789-01",
  "João da Silva",
  "1990-01-01",
  "Masculino",
  "O+",
  ["Nenhuma"],
  "Rua A, 123, Cidade X",
  "(11) 98765-4321",
  "joao.silva@email.com",
  { nome: "Maria Silva", telefone: "(11) 91234-5678" }
);

const medico1 = new Medico(
  1,
  "CRM/SP 123456",
  "Dr. Ana Souza",
  ["Cardiologia", "Pediatria"],
  "(11) 99876-5432",
  { dias: ["Segunda", "Quarta"], horario: "08:00-12:00" }
);

const consulta1 = new Consulta(
  1,
  "2023-10-15T10:00:00Z",
  paciente1,
  medico1,
  "Dor no peito",
  "Agendada",
  "Paciente relatou dor no peito após esforço físico."
);

const exame1 = new Exame(
  1,
  "Eletrocardiograma",
  "Normal",
  "2023-10-15T11:00:00Z",
  "Laboratório X",
  medico1,
  paciente1
);

const prontuario1 = new Prontuario(1, paciente1);

paciente1.agendarConsulta(consulta1);
paciente1.adicionarExame(exame1);

prontuario1.adicionarDiagnostico("Hipertensão arterial");
prontuario1.adicionarTratamento("Recomendar dieta balanceada e exercícios regulares");
prontuario1.adicionarMedicamento("Losartana 50mg, 1x ao dia");

console.log("Paciente:", prontuario1);
