package app.concessionaria.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import app.concessionaria.app.dtos.res.ClienteDTORes;
import app.concessionaria.app.services.ClienteService;

@RestController
@RequestMapping(value = "/clients")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping("findAll")
    public ResponseEntity<List<ClienteDTORes>> findAllClientes() {
        
        List<ClienteDTORes> listClientDTORes = this.clienteService.findAllClientes();

        return ResponseEntity.ok().body(listClientDTORes);
    }
    
}
