package app.concessionaria.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import app.concessionaria.app.models.AutomovelModel;

public interface AutomovelRepository extends JpaRepository<AutomovelModel, String>{
    
}
