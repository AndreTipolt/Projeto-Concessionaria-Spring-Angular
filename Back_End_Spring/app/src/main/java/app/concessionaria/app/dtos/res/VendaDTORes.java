package app.concessionaria.app.dtos.res;

import java.time.LocalDateTime;

import app.concessionaria.app.models.AutomovelModel;
import app.concessionaria.app.models.ClienteModel;
import app.concessionaria.app.models.VendaModel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VendaDTORes {
    
    private String id;
    private LocalDateTime data;
    private ClienteModel clienteModel;
    private AutomovelModel automovelModel;

    public VendaDTORes(VendaModel vendaModel) {

        this.id = vendaModel.getId();
        this.data = vendaModel.getData();
        this.clienteModel = vendaModel.getCliente();
        this.automovelModel = vendaModel.getAutomovel();
    }
}
