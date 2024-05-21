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

import app.concessionaria.app.dtos.req.AutomovelDTOReq;
import app.concessionaria.app.dtos.res.AutomovelDTORes;
import app.concessionaria.app.services.AutomovelService;
import jakarta.validation.Valid;


@RestController
@RequestMapping(value = "/automoveis")
public class AutomovelController {
    
    @Autowired
    private AutomovelService automovelService;

    @GetMapping("findAll")
    public ResponseEntity<List<AutomovelDTORes>> findAllAutomovels() {
        
        List<AutomovelDTORes> listClientDTORes = this.automovelService.findAllAutomoveis();

        return ResponseEntity.ok().body(listClientDTORes);
    }

    @PostMapping("save")
    public ResponseEntity<Void> saveAutomovel(@Valid @RequestBody AutomovelDTOReq automovelDTOReq) {
        
        this.automovelService.saveAutomovel(automovelDTOReq);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{idAutomovel}")
    public ResponseEntity<AutomovelDTORes> findAutomovelById(@PathVariable String idAutomovel) {
        
        AutomovelDTORes automovelDTO = this.automovelService.findAutomovelById(idAutomovel);

        return ResponseEntity.ok().body(automovelDTO);
    }
    

    @DeleteMapping(value = "/{idAutomovel}")
    public ResponseEntity<Void> deleteAutomovelById(@PathVariable String idAutomovel) {

        this.deleteAutomovelById(idAutomovel);

        return ResponseEntity.ok().build();
    }
}