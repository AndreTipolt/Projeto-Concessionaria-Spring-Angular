package app.concessionaria.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.concessionaria.app.models.VendaModel;

@Repository
public interface VendaRepository extends JpaRepository<VendaModel, String>{
    
}
