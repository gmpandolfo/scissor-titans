import { Agendamento, Profissional, Servico } from "@barba/core";
import { ApiProperty } from "@nestjs/swagger";
import { UsuarioModel } from "src/usuario/usuario.model";

export class AgendamentoModel implements Partial<Agendamento>{
    // @ApiProperty()
    // id: number;
  
    @ApiProperty()
    data: Date;
  
    @ApiProperty({ type: UsuarioModel })
    usuario: UsuarioModel;
  
    @ApiProperty({ type: UsuarioModel })
    profissional: Profissional;
  
    @ApiProperty(/*{ type: [ServicoModel] }*/)
    servicos: Servico[];
}