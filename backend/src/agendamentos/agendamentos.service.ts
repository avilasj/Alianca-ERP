import { Injectable } from '@nestjs/common';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

type Agendamento = {
  id: number;
  clienteId: number;
  data: string;
  horario: string;
  servico: string;
  observacao: string;
  status: 'agendado' | 'cancelado' | 'concluido';
};

@Injectable()
export class AgendamentosService {
  private agendamentos: Agendamento[] = [];
  private id = 1;

  create(data: CreateAgendamentoDto): Agendamento {
    const agendamento: Agendamento = {
      id: this.id++,
      ...data,
      status: 'agendado',
    };

    this.agendamentos.push(agendamento);
    return agendamento;
  }

  findAll(): Agendamento[] {
    return this.agendamentos;
  }

  findOne(id: number): Agendamento | undefined {
    return this.agendamentos.find((a) => a.id === id);
  }

  cancelar(id: number): Agendamento | null {
    const agendamento = this.agendamentos.find((a) => a.id === id);

    if (!agendamento) {
      return null;
    }

    agendamento.status = 'cancelado';
    return agendamento;
  }

  concluir(id: number): Agendamento | null {
    const agendamento = this.agendamentos.find((a) => a.id === id);

    if (!agendamento) {
      return null;
    }

    agendamento.status = 'concluido';
    return agendamento;
  }
}