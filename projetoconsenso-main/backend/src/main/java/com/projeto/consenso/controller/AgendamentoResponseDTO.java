package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.projeto.consenso.model.Agendamento;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AgendamentoResponseDTO {
    public List<Agendamento> mensagem;
    public HttpStatus httpStatus;
}
