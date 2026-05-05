import { Injectable } from '@nestjs/common';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';

type MovimentacaoEstoque = {
  id: number;
  produtoId: number;
  tipo: 'entrada' | 'saida';
  quantidade: number;
  observacao: string;
  data: Date;
};

@Injectable()
export class EstoqueService {
  private movimentacoes: MovimentacaoEstoque[] = [];
  private id = 1;

  registrar(data: CreateMovimentacaoDto): MovimentacaoEstoque {
    const movimentacao: MovimentacaoEstoque = {
      id: this.id++,
      ...data,
      data: new Date(),
    };

    this.movimentacoes.push(movimentacao);
    return movimentacao;
  }

  findAll(): MovimentacaoEstoque[] {
    return this.movimentacoes;
  }

  consultarSaldo(produtoId: number) {
    const saldo = this.movimentacoes
      .filter((m) => m.produtoId === produtoId)
      .reduce((total, m) => {
        if (m.tipo === 'entrada') {
          return total + m.quantidade;
        }

        return total - m.quantidade;
      }, 0);

    return {
      produtoId,
      saldo,
    };
  }
}