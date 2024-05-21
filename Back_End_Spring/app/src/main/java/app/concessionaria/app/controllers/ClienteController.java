package app.concessionaria.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.concessionaria.app.dtos.req.ClienteDTOReq;
import app.concessionaria.app.dtos.res.ClienteDTORes;
import app.concessionaria.app.services.ClienteService;
import jakarta.validation.Valid;


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

    @PostMapping("save")
    public ResponseEntity<Void> saveCliente(@Valid @RequestBody ClienteDTOReq clienteDTOReq) {
        
        this.clienteService.saveCliente(clienteDTOReq);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{idCliente}")
    public ResponseEntity<ClienteDTORes> findClienteById(@PathVariable String idCliente) {
        
        ClienteDTORes clienteDTO = this.clienteService.findClienteById(idCliente);

        return ResponseEntity.ok().body(clienteDTO);
    }
    

    @DeleteMapping(value = "/{idCliente}")
    public ResponseEntity<Void> deleteClienteById(@PathVariable String idCliente) {

        this.deleteClienteById(idCliente);

        return ResponseEntity.ok().build();
    }
}
