import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('App') // Define um grupo para o controller na documentação
@Controller('app')
export class AppController {
  @Get('ping')
  @ApiOperation({ summary: 'Verifica se a API está funcionando' }) // Descrição da operação
  @ApiResponse({ status: 200, description: 'A resposta de ping', type: String }) // Resposta esperada
  ping(): string {
    return 'pong';
  }
}