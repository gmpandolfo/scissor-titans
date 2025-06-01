import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Servico } from '@barba/core';

@Injectable()
export class ServicoProxyService {
  constructor(private readonly http: HttpService) {}

  async buscarTodos() {
    const response = await firstValueFrom(
      this.http.get('http://localhost:3002/servico'),
    );
    return response.data;
  }

  async criarServico(servicoData: Partial<Servico>) {
    const response = await firstValueFrom(
      this.http.post('http://localhost:3002/servico', servicoData),
    );
    return response.data;
  }
}