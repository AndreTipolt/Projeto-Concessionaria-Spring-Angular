package app.concessionaria.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.concessionaria.app.repositories.ClienteRepository;

@Service
public class ClientService {
    

    @Autowired
    private ClienteRepository clienteRepository;
}
