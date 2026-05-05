import { Injectable } from '@nestjs/common';
import { CreateGarantiaDto } from './dto/create-garantia.dto';

type Garantia = {
  id: number;
  clienteId: number;
  produtoId: number;
  descricao: string;
  dataEmissao: Date;
  validadeMeses: number;
};

@Injectable()
export class GarantiasService {
  private garantias: Garantia[] = [];
  private id = 1;

  create(data: CreateGarantiaDto): Garantia {
    const garantia: Garantia = {
      id: this.id++,
      ...data,
      dataEmissao: new Date(),
    };

    this.garantias.push(garantia);
    return garantia;
  }

  findAll(): Garantia[] {
    return this.garantias;
  }

  findOne(id: number): Garantia | undefined {
    return this.garantias.find((g) => g.id === id);
  }

  findByCliente(clienteId: number): Garantia[] {
    return this.garantias.filter((g) => g.clienteId === clienteId);
  }
}