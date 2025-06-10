class Consulta {
  constructor(id, data, paciente, medico, motivo, status, obervacoes) {
    this.id = id;
    this.data = data;
    this.paciente = paciente;
    this.medico = medico;
    this.motivo = motivo;
    this.status = status;
    this.obervacoes = obervacoes;
  }

  detalhesConsulta() {
    return `Consulta agendada para ${this.data} às ${this.hora} com Dr(a). ${this.medico.nome} (${this.especialidade})`;
  }
}
