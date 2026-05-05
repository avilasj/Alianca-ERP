import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Controller('agendamentos')
export class AgendamentosController {
  constructor(private readonly service: AgendamentosService) {}

  @Post()
  create(@Body() data: CreateAgendamentoDto) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id/cancelar')
  cancelar(@Param('id') id: string) {
    return this.service.cancelar(Number(id));
  }

  @Patch(':id/concluir')
  concluir(@Param('id') id: string) {
    return this.service.concluir(Number(id));
  }
}