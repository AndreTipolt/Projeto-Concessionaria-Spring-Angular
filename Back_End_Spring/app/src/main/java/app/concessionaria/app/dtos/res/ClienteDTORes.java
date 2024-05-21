package app.concessionaria.app.dtos.res;

import app.concessionaria.app.models.ClienteModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClienteDTORes {
    
    private String id;
    private String nome;
    private String cpf;
    private String endereco;

    public ClienteDTORes(ClienteModel clienteModel) {
        this.id = clienteModel.getId();
        this.nome = clienteModel.getNome();
        this.cpf = clienteModel.getCpf();
        this.endereco = clienteModel.getEndereco();
    }
}
