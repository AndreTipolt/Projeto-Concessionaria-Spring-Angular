package app.concessionaria.app.dtos.req;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class VendaDTOReq {
    
    private String idCliente;

    private String idAutomovel;
}
