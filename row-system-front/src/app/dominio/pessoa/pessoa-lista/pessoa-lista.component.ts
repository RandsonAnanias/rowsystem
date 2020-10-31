import { Component, OnInit } from '@angular/core';

import { Pessoa } from '../pessoa';
import { PessoaService } from '../../pessoa/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoas: Pessoa[];


  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit() {

    this.pessoaService.buscarTodos()
      .subscribe(resposta => {
        this.pessoas = resposta
      });

  }

  excluir(pessoaId: number) {
    this.pessoaService.excluir(pessoaId)
      .subscribe(resposta => {
        console.log("Pessoa excluído com sucesso");
        // retorna para a lista
        this.pessoaService.buscarTodos()
          .subscribe(resposta => {
            this.pessoas = resposta
          });
        // this.router.navigate(['/pessoa']);
      });
  }

}
