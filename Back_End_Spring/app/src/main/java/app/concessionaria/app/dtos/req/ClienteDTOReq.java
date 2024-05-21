package app.concessionaria.app.dtos.req;

import app.concessionaria.app.models.ClienteModel;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ClienteDTOReq {
    
    @NotBlank(message = "Nome não pode estar em branco")
    private String nome;

    @NotBlank(message = "CPF não pode estar em branco")
    private String cpf;

    @NotBlank(message = "Endereço não pode estar em branco")
    private String endereco;

    public ClienteDTOReq(ClienteModel clienteModel) {

        this.nome = clienteModel.getNome();
        this.cpf = clienteModel.getCpf();
        this.endereco = clienteModel.getEndereco();
    }
}
