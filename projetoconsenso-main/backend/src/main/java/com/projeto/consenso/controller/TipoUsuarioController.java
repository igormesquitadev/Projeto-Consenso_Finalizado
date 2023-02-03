package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.consenso.model.TipoUsuario;
import com.projeto.consenso.service.TipoUsuarioService;

@RestController
@RequestMapping("/usertipo")
public class TipoUsuarioController {
    
    @Autowired
    private TipoUsuarioService tipoUsuarioService;

    @PostMapping
    public TipoUsuario criarTipo(@RequestBody TipoUsuario tipoUsuario){
        return tipoUsuarioService.save(tipoUsuario);
    }

    @GetMapping
    public List<TipoUsuario> obterTipo(){
        return tipoUsuarioService.findAll();
    }

    @GetMapping("/{id}")
    public TipoUsuario obterTipoPeloId(@PathVariable("id") long id){
        return tipoUsuarioService.findById(id).get();
    }
}
