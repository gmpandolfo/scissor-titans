import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [DbModule, ServicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
