import { Usuario } from "@barba/core";
import { ApiProperty } from "@nestjs/swagger";

export class UsuarioModel implements Usuario {  
    @ApiProperty()
    nome: string;
  
    @ApiProperty()
    email: string;

    @ApiProperty()
    senha?: string;

    @ApiProperty()
    telefone?: string;
  
    @ApiProperty()
    barbeiro?: boolean;
}