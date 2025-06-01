import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ServicoModel } from './servico.model';

@ApiTags('Serviço')
@Controller('servico')
export class ServicoController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os serviços' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os serviços',
    type: [ServicoModel],
  })
  buscarTodos() {
    return this.prisma.servico.findMany();
  }

  @Post()
  @ApiOperation({ summary: 'Cria um novo serviço' })
  @ApiResponse({
    status: 201,
    description: 'Serviço criado com sucesso',
    type: ServicoModel,
  })
  @ApiBody({ type: ServicoModel })
  async criar(@Body() dados: ServicoModel) {
    return this.prisma.servico.create({ data: dados });
  }
}
