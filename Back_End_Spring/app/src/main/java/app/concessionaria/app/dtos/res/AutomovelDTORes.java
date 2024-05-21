package app.concessionaria.app.dtos.res;

import app.concessionaria.app.models.AutomovelModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class AutomovelDTORes {
    
    private String id;

    private String placa;

    private String cor;

    private String marca;

    private String ano;

    private Integer preco;

    public AutomovelDTORes(AutomovelModel automovelModel) {

        this.id = automovelModel.getId();
        this.placa = automovelModel.getPlaca();
        this.cor = automovelModel.getCor();
        this.marca = automovelModel.getMarca();
        this.ano = automovelModel.getAno();
        this.preco = automovelModel.getPreco();
    }

}
