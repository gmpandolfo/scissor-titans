import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Serviço') // Agrupa as rotas de serviço na documentação
@Controller('servico')
export class ServicoController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os serviços' }) // Descrição da operação
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os serviços',
    type: [Object], // Representa um array de objetos
  })
  buscarTodos() {
    return this.prisma.servico.findMany();
  }
}
