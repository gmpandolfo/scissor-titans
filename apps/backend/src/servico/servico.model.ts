import { ApiProperty } from "@nestjs/swagger";

export class ServicoModel {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    preco: number;
  
    @ApiProperty()
    duracao: number;
}