package com.projeto.consenso.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAgendamento;
    private String data;
    private String hora;

    @OneToOne
    @JoinColumn(name = "idServico")
    private Servico servico;

    @OneToOne
    @JoinColumn(name="idUsuario")
    private Usuario usuario;

}
