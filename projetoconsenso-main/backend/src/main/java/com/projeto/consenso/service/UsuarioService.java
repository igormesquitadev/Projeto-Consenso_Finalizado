package com.projeto.consenso.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.consenso.model.Usuario;

@Repository
public interface UsuarioService extends JpaRepository<Usuario, Long>{
    @Query("select e from Usuario e where e.email = :email and e.senha = :senha")
    public Usuario buscarLogin(String email, String senha);
}
