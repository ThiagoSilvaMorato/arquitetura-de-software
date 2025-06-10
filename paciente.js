class Paciente {
  constructor(nome, dataNasc, historico, alergias, endereco, telefone, email) {
    this.nome = nome;
    this.dataNasc = dataNasc;
    this.historico = historico;
    this.alergias = alergias;
    this.endereco = endereco;
    this.telefone = telefone;
    this.email = email;
    this.consultas = [];
    this.exames = [];
  }

  agendarConsulta(data, medico) {
    this.consultas.push({ data, medico });

    console.log(`Consulta agendada para ${data} com ${medico}`);
  }

  adicionarExame(nomeExame, resultado) {
    this.exames.push({ nomeExame, resultado });

    console.log(`Exame ${nomeExame} adicionado com resultado: ${resultado}`);
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
