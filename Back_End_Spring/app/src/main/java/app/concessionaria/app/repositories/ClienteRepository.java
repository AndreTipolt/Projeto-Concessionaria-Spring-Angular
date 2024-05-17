package app.concessionaria.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.concessionaria.app.models.ClienteModel;

@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel, String>{
    
}
