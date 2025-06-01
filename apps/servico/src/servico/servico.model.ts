import { ApiProperty } from "@nestjs/swagger";
import { Servico } from "@barba/core";
export class ServicoModel implements Partial<Servico>{
    // @ApiProperty()
    // id: number;
  
    @ApiProperty()
    nome: string;

    @ApiProperty()
    descricao: string;
  
    @ApiProperty()
    preco: number;
  
    @ApiProperty()
    qtdeSlots: number;

    @ApiProperty()
    imagemURL: string;
}