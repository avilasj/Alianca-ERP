import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GarantiasService } from './garantias.service';
import { CreateGarantiaDto } from './dto/create-garantia.dto';

@Controller('garantias')
export class GarantiasController {
  constructor(private readonly service: GarantiasService) {}

  @Post()
  create(@Body() data: CreateGarantiaDto) {
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

  @Get('cliente/:clienteId')
  findByCliente(@Param('clienteId') clienteId: string) {
    return this.service.findByCliente(Number(clienteId));
  }
}