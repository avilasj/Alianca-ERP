import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly service: ProdutosService) {}

  @Post()
  create(@Body() data: CreateProdutoDto) {
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

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CreateProdutoDto) {
    return this.service.update(Number(id), data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.service.remove(Number(id));
    return { message: 'Produto removido com sucesso' };
  }
}