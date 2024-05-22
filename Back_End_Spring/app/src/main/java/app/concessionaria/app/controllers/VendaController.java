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

import app.concessionaria.app.dtos.req.VendaDTOReq;
import app.concessionaria.app.dtos.res.VendaDTORes;
import app.concessionaria.app.services.VendaService;
import jakarta.validation.Valid;

@RestController
@RequestMapping(value = "/vendas")
public class VendaController {
    
    @Autowired
    private VendaService vendaService;

    @GetMapping("findAll")
    public ResponseEntity<List<VendaDTORes>> findAllVendas() {
        
        List<VendaDTORes> listClientDTORes = this.vendaService.findAllVendas();

        return ResponseEntity.ok().body(listClientDTORes);
    }

    @PostMapping("save")
    public ResponseEntity<Void> saveVenda(@Valid @RequestBody VendaDTOReq vendaDTOReq) {
        
        this.vendaService.saveVenda(vendaDTOReq);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{idVenda}")
    public ResponseEntity<VendaDTORes> findVendaById(@PathVariable String idVenda) {
        
        VendaDTORes vendaDTO = this.vendaService.findVendaById(idVenda);

        return ResponseEntity.ok().body(vendaDTO);
    }
    

    @DeleteMapping(value = "/{idVenda}")
    public ResponseEntity<Void> deleteVendaById(@PathVariable String idVenda) {

        this.vendaService.deleteVenda(idVenda);

        return ResponseEntity.ok().build();
    }
}
