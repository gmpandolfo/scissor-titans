import { UsuarioModule } from './usuario/usuario.module';
import { ServicoModule } from './servico/servico.module';
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AppController } from './app.controller';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [DbModule, ServicoModule, AgendamentoModule, UsuarioModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
