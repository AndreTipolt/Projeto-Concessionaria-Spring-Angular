package app.concessionaria.app.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import app.concessionaria.app.dtos.req.VendaDTOReq;
import app.concessionaria.app.dtos.res.VendaDTORes;
import app.concessionaria.app.models.AutomovelModel;
import app.concessionaria.app.models.ClienteModel;
import app.concessionaria.app.models.VendaModel;
import app.concessionaria.app.repositories.VendaRepository;
import app.concessionaria.app.services.exceptions.ObjectNotFoundException;

@Service
public class VendaService {
    
    @Autowired
    private VendaRepository vendaRepository;

    @Autowired
    private ClienteService clienteService;

    @Autowired
    private AutomovelService automovelService;

    @Transactional(readOnly = true)
    public List<VendaDTORes> findAllVendas() {
        
        return this.vendaRepository.findAll().stream().map((venda) -> new VendaDTORes(venda)).toList();
    }

    @Transactional(readOnly = true)
    public VendaDTORes findVendaById(String idVenda) {

        VendaModel vendaModel = this.vendaRepository.findById(idVenda).orElseThrow(() -> new ObjectNotFoundException("Venda não encontrada"));

        return new VendaDTORes(vendaModel);
    }

    @Transactional
    public void deleteVenda(String idVenda) {

        this.findVendaById(idVenda); // Se nao tiver vai lancar uma excecao

        this.vendaRepository.deleteById(idVenda);
    }

    @Transactional
    public void saveVenda(VendaDTOReq vendaDTOReq) {

        ClienteModel clienteModel = clienteService.findClienteByIdOrThrowException(vendaDTOReq.getIdCliente());
        AutomovelModel automovelModel= automovelService.findAutomovelByIdOrThrowException(vendaDTOReq.getIdAutomovel());

        // Caso algum dos dois nao exista a excecao sera lançada

        VendaModel vendaModel = new VendaModel();

        vendaModel.setData(LocalDateTime.now());
        vendaModel.setCliente(clienteModel);
        vendaModel.setAutomovel(automovelModel);

        this.vendaRepository.save(vendaModel);
    }
}
