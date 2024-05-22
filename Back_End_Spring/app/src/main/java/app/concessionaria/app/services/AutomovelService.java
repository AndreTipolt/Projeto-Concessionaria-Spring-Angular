package app.concessionaria.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import app.concessionaria.app.dtos.req.AutomovelDTOReq;
import app.concessionaria.app.dtos.res.AutomovelDTORes;
import app.concessionaria.app.models.AutomovelModel;
import app.concessionaria.app.repositories.AutomovelRepository;
import app.concessionaria.app.services.exceptions.ObjectNotFoundException;

@Service
public class AutomovelService {
    
    @Autowired
    private AutomovelRepository automovelRepository;

    @Transactional
    public List<AutomovelDTORes> findAllAutomoveis() {
        
        return this.automovelRepository.findAll().stream().map((automovel) -> new AutomovelDTORes(automovel)).toList();
    }

    @Transactional
    public AutomovelDTORes findAutomovelById(String idAutomovel) {

        AutomovelModel automovelModel = this.automovelRepository.findById(idAutomovel).orElseThrow(() -> new ObjectNotFoundException("Automovel não encontrado"));

        return new AutomovelDTORes(automovelModel);
    }

    @Transactional
    public void deleteAutomovel(String idAutomovel) {

        this.findAutomovelById(idAutomovel); // Se nao tiver vai lancar uma excecao

        this.automovelRepository.deleteById(idAutomovel);
    }

    @Transactional
    public void saveAutomovel(AutomovelDTOReq automovelDTOReq) {

        AutomovelModel automovelModel = new AutomovelModel();

        automovelModel.setAno(automovelDTOReq.getAno());
        automovelModel.setCor(automovelDTOReq.getCor());
        automovelModel.setPreco(automovelDTOReq.getPreco());
        automovelModel.setPlaca(automovelDTOReq.getPlaca());
        automovelModel.setMarca(automovelDTOReq.getMarca());
        automovelModel.setModelo(automovelDTOReq.getModelo());

        this.automovelRepository.save(automovelModel);
    }

    public AutomovelModel findAutomovelByIdOrThrowException(String idAutomovel) {
        
        return this.automovelRepository.findById(idAutomovel).orElseThrow(() -> new ObjectNotFoundException("Automovel não encontrado"));
    }
}
