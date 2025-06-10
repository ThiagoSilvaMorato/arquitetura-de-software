class Paciente {
  constructor(
    id,
    cpf,
    nome,
    dataNasc,
    genero,
    tipoSanguineo,
    alergias,
    endereco,
    telefone,
    email,
    contatoEmergencia
  ) {
    this.id = id;
    this.cpf = cpf;
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.genero = genero;
    this.tipoSanguineo = tipoSanguineo;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.contatoEmergencia = contatoEmergencia;

    this.historicoMedico = [];
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(consulta) {
    const consultaNoMesmoHoraro = this.consultas.some((c) => c.data === consulta.data);

    if (consultaNoMesmoHoraro) {
      console.log("Paciente já possui uma consulta agendada para este horário.");
      return;
    }
    this.consultas.push(consulta);

    console.log(`Consulta agendada para ${consulta.data} com ${consulta.medico.nome}`);
  }

  adicionarExame(exame) {
    this.exames.push(exame);

    console.log(`Exame ${exame.nome} adicionado com resultado: ${exame.resultado}`);
  }

  adicionarEventoHistorico(evento) {
    this.historicoMedico.push(evento);
    console.log(`Evento médico adicionado ao histórico do paciente: ${this.nome}`);
  }
}

const paciente1 = new Paciente(
  "Thiago Morato",
  "1999-10-22",
  "Nenhum histórico relevante",
  "Nenhuma alergia conhecida",
  "Rua Exemplo, 123, São Paulo, SP",
  "(11) 98765-4321",
  "thiagomorato@teste.com"
);

paciente1.agendarConsulta("2023-10-30", "Dr. Silva");
paciente1.adicionarExame("Hemograma", "Normal");
// console.log(paciente1);
