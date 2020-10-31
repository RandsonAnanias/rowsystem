import { Component, OnInit } from '@angular/core';

import { Informacao } from '../informacao';
import { InformacaoService } from '../../informacao/informacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'informacao-lista',
  templateUrl: './informacao-lista.component.html',
  styleUrls: ['./informacao-lista.component.css']
})
export class InformacaoListaComponent implements OnInit {

  colecoes: Informacao[];


  constructor(
    private informacaoService: InformacaoService,
    private router: Router
  ) { }

  ngOnInit() {

    this.informacaoService.buscarTodos()
      .subscribe(resposta => {
        this.colecoes = resposta
      });

  }

  excluir(informacaoId: number) {
    this.informacaoService.excluir(informacaoId)
      .subscribe(resposta => {
        console.log("Informacao excluído com sucesso");
        // retorna para a lista
        this.informacaoService.buscarTodos()
          .subscribe(resposta => {
            this.colecoes = resposta
          });
        // this.router.navigate(['/informacao']);
      });
  }

  selecCoelcao(id: number){

    this.informacaoService.buscarPeloId(id);

  }
}
