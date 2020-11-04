package br.com.unievangelica.ftt.domain.colecao;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.ftt.core.controller.AbstractController;

@RestController
@RequestMapping("/api/colecao")
public class ColecaoController extends AbstractController<Colecao>{
}

