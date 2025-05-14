import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorFilter } from './error.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const port = process.env.PORT ?? 3001;
  const app = await NestFactory.create(AppModule, { cors: true });

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Barba Brutal API')
    .setDescription('Documentação da API com Swagger')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Documentação acessível em /docs

  app.useGlobalFilters(new ErrorFilter());

  await app.listen(port);
}
bootstrap();