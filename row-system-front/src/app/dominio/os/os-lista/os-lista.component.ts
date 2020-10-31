import { Component, OnInit } from '@angular/core';

import { Os } from '../os';
import { OsService } from '../../os/os.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Colecao } from '../../colecao/colecao';
import { ColecaoService } from '../../colecao/colecao.service';

@Component({
  selector: 'os-lista',
  templateUrl: './os-lista.component.html',
  styleUrls: ['./os-lista.component.css']
})
export class OsListaComponent implements OnInit {

    oss: Os[];
    colecao: Colecao;

    constructor(
      private route: ActivatedRoute,
      private osService: OsService,
      private router: Router
    ){}

    ngOnInit() {
      this.colecao = new Colecao();

      this.colecao.id = this.route.snapshot.params['id'];

      if (this.colecao.id != null) {
        this.osService.buscarTodosColecao(this.colecao.id)
          .subscribe(resposta => {
            this.oss = resposta;
          });
      } else {
        this.osService.buscarTodos()
      .subscribe(resposta => {
        this.oss = resposta
      });
      }

    }

    Adicionar(){
      this.router.navigate(['/os/incluir/1']);
    }

    excluir(osId: number) {
      this.osService.excluir(osId)
      .subscribe(resposta => {
        console.log("Os excluído com sucesso");
        // retorna para a lista
        this.router.navigate(['/os']);
      } );
    }

}
