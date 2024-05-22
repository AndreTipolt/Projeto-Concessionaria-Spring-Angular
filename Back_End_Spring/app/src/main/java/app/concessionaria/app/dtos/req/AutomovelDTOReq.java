package app.concessionaria.app.dtos.req;

import app.concessionaria.app.models.AutomovelModel;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AutomovelDTOReq {
    
    @NotBlank(message = "Placa não pode estar em branco")
    private String placa;

    @NotBlank(message = "Cor não pode estar em branco")
    private String cor;

    @NotBlank(message = "Marca não pode estar em branco")
    private String marca;

    @NotBlank(message = "Ano não pode estar em branco")
    private String ano;

    @NotBlank(message = "Preço não pode estar em branco")
    private Integer preco;

    @NotBlank(message = "Modelo não pode estar em branco")
    private String modelo;

    public AutomovelDTOReq(AutomovelModel automovelModel) {

        this.placa = automovelModel.getPlaca();
        this.cor = automovelModel.getCor();
        this.marca = automovelModel.getMarca();
        this.ano = automovelModel.getAno();
        this.preco = automovelModel.getPreco();
    }

}