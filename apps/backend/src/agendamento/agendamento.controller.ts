import { Agendamento, ObterHorariosOcupados, Usuario } from '@barba/core';
import { AgendamentoRepository } from './agendamento.repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
} from '@nestjs/common';
import { UsuarioLogado } from 'src/usuario/usuario.decorator';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AgendamentoModel } from './agendamento.model';

@ApiTags('Agendamentos')
@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly repo: AgendamentoRepository) {}

  @Post()
  @ApiOperation({ summary: 'Criar novo agendamento' })
  @ApiResponse({ status: 201, description: 'Agendamento criado com sucesso' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  criar(
    @Body() agendamento: Agendamento,
    @UsuarioLogado() usuarioLogado: Usuario,
  ) {
    console.log('Usuário logado:', usuarioLogado);

    if (agendamento.usuario.id !== usuarioLogado.id) {
      throw new HttpException('Usuário não autorizado', 401);
    }
    return this.repo.criar(agendamento);
  }

  @Get(':email')
  @ApiOperation({ summary: 'Buscar agendamentos por e-mail do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Lista de agendamentos encontrados',
    type: [AgendamentoModel],
  })
  buscarPorEmail(@Param('email') email: string) {
    return this.repo.buscarPorEmail(email);
  }

  @Get('ocupacao/:profissional/:data')
  @ApiOperation({
    summary: 'Buscar horários ocupados de um profissional em uma data',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de horários ocupados',
    type: [String], // ou um modelo de horário se quiser
  })
  buscarOcupacaoPorProfissionalEData(
    @Param('profissional') profissional: string,
    @Param('data') dataParam: string,
  ) {
    const casoDeUso = new ObterHorariosOcupados(this.repo);
    return casoDeUso.executar(+profissional, new Date(dataParam));
  }

  @Get(':profissional/:data')
  @ApiOperation({
    summary: 'Buscar agendamentos por profissional e data',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de agendamentos encontrados',
    type: [AgendamentoModel],
  })
  buscarPorProfissionalEData(
    @Param('profissional') profissional: string,
    @Param('data') dataParam: string,
  ) {
    return this.repo.buscarPorProfissionalEData(
      +profissional,
      new Date(dataParam),
    );
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir agendamento (somente barbeiros)' })
  @ApiResponse({ status: 200, description: 'Agendamento excluído com sucesso' })
  @ApiResponse({ status: 401, description: 'Usuário não autorizado' })
  async excluir(
    @Param('id') id: string,
    @UsuarioLogado() usuarioLogado: Usuario,
  ) {
    if (!usuarioLogado.barbeiro) {
      throw new HttpException('Usuário não autorizado', 401);
    }
    await this.repo.excluir(+id);
  }
}
