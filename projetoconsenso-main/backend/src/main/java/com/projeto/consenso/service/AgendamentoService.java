package com.projeto.consenso.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.projeto.consenso.model.Agendamento;

@Repository
public interface AgendamentoService extends JpaRepository<Agendamento, Long>{
   @Query("select e from Agendamento e where e.usuario.idUsuario = :id")
   public List<Agendamento> agendamentosPorId(Long id); 

   @Query("select e from Agendamento e where e.servico.usuario.idUsuario = :id")
   public List<Agendamento> agendamentosPrestador(Long id);
}
