package app.concessionaria.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.concessionaria.app.dtos.res.AutomovelDTORes;
import app.concessionaria.app.services.AutomovelService;


@RestController
@RequestMapping(value = "/automoveis")
public class AutomovelController {
    
    @Autowired
    private AutomovelService automovelService;


    @GetMapping("findAll")
    public ResponseEntity<List<AutomovelDTORes>> findAllAutomoveis() {
        
        List<AutomovelDTORes> listAutomoveisDTO = this.automovelService.findAllAutomoveis();

        return ResponseEntity.ok().body(listAutomoveisDTO);
    }
    
}
