import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ServicoProxyService } from './servico-proxy.service';
import { UsuarioLogado } from 'src/usuario/usuario.decorator';
import { Servico, Usuario } from '@barba/core';

import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Serviço')
@ApiBearerAuth() // Indica que usa JWT na documentação
@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoProxy: ServicoProxyService) {}

  @Get()
  @ApiOperation({ summary: 'Busca todos os serviços' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todos os serviços',
    type: [Object],
  })
  async buscarTodos() {
    return this.servicoProxy.buscarTodos();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Cria um novo serviço' })
  @ApiResponse({
    status: 201,
    description: 'Serviço criado com sucesso',
    type: Object,
  })
  @ApiResponse({ status: 401, description: 'Usuário não autenticado' })
  @ApiResponse({ status: 403, description: 'Apenas barbeiros podem criar serviços' })
  async criarServico(
    @Body() servico: Partial<Servico>,
    @UsuarioLogado() usuarioLogado: Usuario,
  ) {
    console.log('Usuário logado:', usuarioLogado);

    if (!usuarioLogado.barbeiro) {
      throw new ForbiddenException('Apenas barbeiros podem criar serviços');
    }

    return this.servicoProxy.criarServico(servico);
  }
}
