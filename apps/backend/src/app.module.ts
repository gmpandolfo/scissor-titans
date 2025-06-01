import { UsuarioModule } from './usuario/usuario.module';
// import { ServicoModule } from './servico/servico.module';
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AppController } from './app.controller';
import { AgendamentoModule } from './agendamento/agendamento.module';

import { HttpModule } from '@nestjs/axios';
import { ServicoController } from './servico/servico.controller';
import { ServicoProxyService } from './servico/servico-proxy.service';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [DbModule, HttpModule, AgendamentoModule, UsuarioModule, ServicoModule],
  controllers: [AppController, ServicoController],
  providers: [ServicoProxyService],
})
export class AppModule {}
