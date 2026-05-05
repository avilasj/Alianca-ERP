import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';

type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
};

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [];
  private id = 1;

  create(data: CreateProdutoDto): Produto {
    const produto: Produto = { id: this.id++, ...data };
    this.produtos.push(produto);
    return produto;
  }

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto | undefined {
    return this.produtos.find((p) => p.id === id);
  }

  update(id: number, data: CreateProdutoDto): Produto | null {
    const index = this.produtos.findIndex((p) => p.id === id);

    if (index === -1) {
      return null;
    }

    this.produtos[index] = { id, ...data };
    return this.produtos[index];
  }

  remove(id: number): void {
    this.produtos = this.produtos.filter((p) => p.id !== id);
  }
}