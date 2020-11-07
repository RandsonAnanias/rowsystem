package br.com.unievangelica.ftt.domain.os;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/os")
public class OsController extends AbstractController<Os> {
}
