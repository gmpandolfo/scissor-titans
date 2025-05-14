import { ApiProperty } from "@nestjs/swagger";
import { ServicoModel } from "src/servico/servico.model";
import { UsuarioModel } from "src/usuario/usuario.model";

export class AgendamentoModel {
    @ApiProperty()
    id: number;
  
    @ApiProperty()
    data: Date;
  
    @ApiProperty({ type: UsuarioModel })
    usuario: UsuarioModel;
  
    @ApiProperty({ type: UsuarioModel })
    profissional: UsuarioModel;
  
    @ApiProperty({ type: [ServicoModel] })
    servicos: ServicoModel[];
}