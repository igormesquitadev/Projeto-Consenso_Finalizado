package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.consenso.model.TipoUsuario;

public interface TipoUsuarioService extends JpaRepository<TipoUsuario, Long>{
    
}
