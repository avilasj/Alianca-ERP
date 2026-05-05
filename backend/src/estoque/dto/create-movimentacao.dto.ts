export class CreateMovimentacaoDto {
  produtoId: number;
  tipo: 'entrada' | 'saida';
  quantidade: number;
  observacao: string;
}