package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.projeto.consenso.model.Usuario;
import com.projeto.consenso.service.UsuarioService;

@RestController
@RequestMapping("/users")
public class UsuarioController {
    
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public Usuario criarUsuario(@RequestBody Usuario usuario){
        return usuarioService.save(usuario);
    }
    
    @GetMapping
    public List<Usuario> obterUsuarios(){
        return usuarioService.findAll();
    }
   
    @GetMapping("/login/{email}/{senha}")
    public Usuario obterUserPeloId(@PathVariable("email") String email, @PathVariable("senha") String senha){
        return usuarioService.buscarLogin(email, senha);
    }

    @GetMapping("/{id}")
    public Usuario obterUserPeloId(@PathVariable("id") long id){
        return usuarioService.findById(id).get();
    }
}
