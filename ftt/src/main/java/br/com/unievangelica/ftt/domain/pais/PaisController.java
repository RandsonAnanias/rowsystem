package br.com.unievangelica.ftt.domain.pais;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.unievangelica.ftt.core.controller.AbstractController;

@RestController
@RequestMapping("/api/pais")
public class PaisController extends AbstractController<Pais>{

}
