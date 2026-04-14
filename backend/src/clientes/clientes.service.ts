import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';

type Cliente = {
  id: number;
  nome: string;
  email: string;
  telefone: string;
};

@Injectable()
export class ClientesService {
  private clientes: Cliente[] = [];
  private id = 1;

  create(data: CreateClienteDto): Cliente {
    const cliente: Cliente = { id: this.id++, ...data };
    this.clientes.push(cliente);
    return cliente;
  }

  findAll(): Cliente[] {
    return this.clientes;
  }

  findOne(id: number): Cliente | undefined {
    return this.clientes.find((c) => c.id === id);
  }

  update(id: number, data: CreateClienteDto): Cliente | null {
    const index = this.clientes.findIndex((c) => c.id === id);

    if (index === -1) {
      return null;
    }

    this.clientes[index] = { id, ...data };
    return this.clientes[index];
  }

  remove(id: number): void {
    this.clientes = this.clientes.filter((c) => c.id !== id);
  }
}

