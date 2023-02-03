package com.projeto.consenso.controller;

import java.util.List;

import org.springframework.http.HttpStatus;

import com.projeto.consenso.model.Servico;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ServicoResponseDTO {
    public List<Servico> mensagem;
    public HttpStatus httpStatus;
}
