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
  ) { }

  ngOnInit() {

    this.colecaoService.findAll()
      .subscribe(colecoes => {
        this.colecoes = colecoes
        this.colecoes.forEach((colecao) => {
          colecao.datacriacaoOrder = colecao.datacriacao.toString().split('/').reverse().join('-');
        });
      });

  }

  onDelete(id: number) {
    this.colecaoService.deleteById(id)
      .subscribe(() => {
        console.log("Coleção deletado com sucesso!");
        //remove o pais da lista
        this.colecoes = this.colecoes.filter(colecao => colecao.id !== id);
      });
  }

}