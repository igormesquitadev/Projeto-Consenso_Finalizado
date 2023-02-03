package com.projeto.consenso.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.consenso.model.Servico;

@Repository
public interface ServicoService extends JpaRepository<Servico, Long>{

    @Query("select e from Servico e where e.usuario.idUsuario = :id") 
    public List<Servico> servicosPorId(Long id);
}
