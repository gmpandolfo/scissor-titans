import { ApiProperty } from "@nestjs/swagger";

export class UsuarioModel {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    email: string;
  
    @ApiProperty()
    barbeiro: boolean;
}