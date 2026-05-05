import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutosModule } from './produtos/produtos.module';
import { EstoqueModule } from './estoque/estoque.module';
import { GarantiasModule } from './garantias/garantias.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';

@Module({
  imports: [ClientesModule, ProdutosModule, EstoqueModule, GarantiasModule, AgendamentosModule],
})
export class AppModule {}