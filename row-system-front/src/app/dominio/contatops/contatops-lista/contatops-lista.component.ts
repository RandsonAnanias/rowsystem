import { Component, OnInit } from '@angular/core';

import { Contatops } from '../contatops';
import { ContatopsService } from '../../contatops/contatops.service';
import { Router } from '@angular/router';

@Component({
  selector: 'contatops-lista',
  templateUrl: './contatops-lista.component.html',
  styleUrls: ['./contatops-lista.component.css']
})
export class ContatopsListaComponent implements OnInit {

  colecoes: Contatops[];


  constructor(
    private contatopsService: ContatopsService,
    private router: Router
  ) { }

  ngOnInit() {

    this.contatopsService.buscarTodos()
      .subscribe(resposta => {
        this.colecoes = resposta
      });

  }

  excluir(contatopsId: number) {
    this.contatopsService.excluir(contatopsId)
      .subscribe(resposta => {
        console.log("Contatops excluído com sucesso");
        // retorna para a lista
        this.contatopsService.buscarTodos()
          .subscribe(resposta => {
            this.colecoes = resposta
          });
        // this.router.navigate(['/contatops']);
      });
  }

  selecCoelcao(id: number){

    this.contatopsService.buscarPeloId(id);

  }
}
