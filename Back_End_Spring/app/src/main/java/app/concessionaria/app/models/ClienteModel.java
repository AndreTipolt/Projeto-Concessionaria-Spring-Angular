package app.concessionaria.app.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "tb_clients")
@Data
public class ClienteModel { // Nome da entidade que vai ser tratada como a tabela tb_clients
    

    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // ID gerado automaticamente no estilo UUID 
    private String id;

    @Column(name = "nome", nullable = false) // Nome do campo é "nome" e nao pode ser null "not null"
    private String nome;

    @Column(name = "cpf", nullable = false) // Nome do campo é "cpf" e nao pode ser null "not null"
    private String cpf;

    @Column(name = "endereco", nullable = false) // Nome do campo é "endereco" e nao pode ser null "not null"
    private String endereco;

    @JsonIgnore
    @OneToMany(mappedBy = "cliente")
    private List<VendaModel> listVendas; // Compras que aquele cliente tem
}
