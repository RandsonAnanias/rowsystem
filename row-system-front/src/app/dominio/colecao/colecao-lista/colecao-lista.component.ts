import { Component, OnInit } from '@angular/core';

import { Colecao } from '../colecao';
import { ColecaoService } from '../../colecao/colecao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'colecao-lista',
  templateUrl: './colecao-lista.component.html',
  styleUrls: ['./colecao-lista.component.css']
})
export class ColecaoListaComponent implements OnInit {

  colecoes: Colecao[];


  constructor(
    private colecaoService: ColecaoService,
    private router: Router
  ) { }

  ngOnInit() {

    this.colecaoService.buscarTodos()
      .subscribe(resposta => {
        this.colecoes = resposta
      });

  }

  excluir(colecaoId: number) {
    this.colecaoService.excluir(colecaoId)
      .subscribe(resposta => {
        console.log("Colecao excluído com sucesso");
        // retorna para a lista
        this.colecaoService.buscarTodos()
          .subscribe(resposta => {
            this.colecoes = resposta
          });
        // this.router.navigate(['/colecao']);
      });
  }

  selecCoelcao(id: number){

    this.colecaoService.buscarPeloId(id);

  }
}
