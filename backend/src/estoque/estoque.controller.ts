import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateMovimentacaoDto } from './dto/create-movimentacao.dto';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly service: EstoqueService) {}

  @Post('movimentacoes')
  registrar(@Body() data: CreateMovimentacaoDto) {
    return this.service.registrar(data);
  }

  @Get('movimentacoes')
  findAll() {
    return this.service.findAll();
  }

  @Get('saldo/:produtoId')
  consultarSaldo(@Param('produtoId') produtoId: string) {
    return this.service.consultarSaldo(Number(produtoId));
  }
}