package com.projeto.consenso.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.projeto.consenso.model.Servico;
import com.projeto.consenso.service.ServicoService;


@RestController
@RequestMapping(value = "/servicos")
public class ServicoController {

    @Autowired
    private ServicoService servicoService;

    
    @PostMapping
    public Servico criarNovoServico(@RequestBody Servico servico) {
        return servicoService.save(servico);
    }
    @GetMapping
    public List<Servico> obterTodosServicos() {
        return servicoService.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Servico> obterServicoId(@PathVariable("id") long id) {
        return servicoService.findById(id);
    }

  @GetMapping("/p/{id}")
    public ResponseEntity obterServicosPeloId(@PathVariable("id") long id){
        List<Servico> servico = servicoService.servicosPorId(id);

        ServicoResponseDTO responseDTO = new ServicoResponseDTO(servico, HttpStatus.OK);
        
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(responseDTO);
    }

    @DeleteMapping("/{id}")
    public String deletarServico(@PathVariable("id") long idservico) {
        servicoService.deleteById(idservico);
        return "Servico deletado com sucesso";
    }

    @PutMapping
    public Servico atualizarServico(@RequestBody Servico servico) {
        Servico servicoBD = servicoService.findById(servico.getIdServico()).get();
        servicoBD.setNome(servico.getNome());
        servicoBD.setDescricao(servico.getDescricao());
        servicoBD = servicoService.save(servicoBD);

        return servicoBD;
    }
}
