package app.concessionaria.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import app.concessionaria.app.dtos.req.ClienteDTOReq;
import app.concessionaria.app.dtos.res.ClienteDTORes;
import app.concessionaria.app.models.ClienteModel;
import app.concessionaria.app.repositories.ClienteRepository;
import app.concessionaria.app.services.exceptions.ObjectNotFoundException;


@Service
public class ClienteService {
    

   @Autowired
    private ClienteRepository clienteRepository;

    @Transactional
    public List<ClienteDTORes> findAllClientes() {
        
        return this.clienteRepository.findAll().stream().map((cliente) -> new ClienteDTORes(cliente)).toList();
    }

    @Transactional
    public ClienteDTORes findClienteById(String idCliente) {

        ClienteModel clienteModel = this.clienteRepository.findById(idCliente).orElseThrow(() -> new ObjectNotFoundException("Cliente não encontrado"));

        return new ClienteDTORes(clienteModel);
    }

    @Transactional
    public void deleteCliente(String idCliente) {

        this.findClienteById(idCliente); // Se nao tiver vai lancar uma excecao

        this.clienteRepository.deleteById(idCliente);
    }

    @Transactional
    public void saveCliente(ClienteDTOReq clienteDTOReq) {

        ClienteModel clienteModel = new ClienteModel();

        clienteModel.setCpf(clienteDTOReq.getCpf());
        clienteModel.setEndereco(clienteDTOReq.getEndereco());
        clienteModel.setNome(clienteDTOReq.getNome());

        this.clienteRepository.save(clienteModel);
    }
}
