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
@Table(name = "tb_automovel")
@Data
public class AutomovelModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name = "placa", nullable = false)
    private String placa;

    @Column(name = "cor", nullable = false)
    private String cor;

    @Column(name = "marca", nullable = false)
    private String marca;

    @Column(name = "ano", nullable = false)
    private String ano;

    @Column(name = "preco", nullable = false)
    private Integer preco;

    @Column(name = "modelo", nullable = false)
    private String modelo;

    @JsonIgnore
    @OneToMany(mappedBy = "automovel")
    private List<VendaModel> listVendas;

    public Integer getPreco(){
        return preco / 100;
    }

    public void setPreco(Integer preco) {

        this.preco = preco * 100;
    }
}
