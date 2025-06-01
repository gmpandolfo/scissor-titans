// servico.module.ts (ou app.module.ts, se estiver tudo junto)
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ServicoController } from './servico.controller';
import { ServicoProxyService } from './servico-proxy.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { UsuarioMiddleware } from 'src/usuario/usuario.middleware';

@Module({
  imports: [HttpModule, UsuarioModule],
  controllers: [ServicoController],
  providers: [ServicoProxyService],
})
export class ServicoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsuarioMiddleware)
    .exclude(
        {
            path: 'servico',
            method: RequestMethod.GET,
        }
    )
    .forRoutes(ServicoController);
  }
}