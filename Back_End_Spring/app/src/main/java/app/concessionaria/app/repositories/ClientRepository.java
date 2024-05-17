package app.concessionaria.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.concessionaria.app.models.ClientModel;

@Repository
public interface ClientRepository extends JpaRepository<ClientModel, String>{
    
}
