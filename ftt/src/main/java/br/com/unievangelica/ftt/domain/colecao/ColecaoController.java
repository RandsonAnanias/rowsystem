package br.com.unievangelica.ftt.domain.colecao;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/colecao")
public class ColecaoController extends AbstractController<Colecao>{
}

