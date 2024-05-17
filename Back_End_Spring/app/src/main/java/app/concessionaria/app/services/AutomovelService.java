package app.concessionaria.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.concessionaria.app.repositories.AutomovelRepository;

@Service
public class AutomovelService {
    
    @Autowired
    private AutomovelRepository automovelRepository;
}
