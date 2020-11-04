package br.com.unievangelica.ftt.domain.carro;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.ftt.core.controller.AbstractController;

@RestController
@RequestMapping("/api/carro")
public class CarroController extends AbstractController<Carro>{

}
