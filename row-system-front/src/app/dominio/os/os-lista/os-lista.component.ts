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
      private osService: OsService,
    ){}

    ngOnInit() {

      this.osService.findAll()
      .subscribe( oss => this.oss = oss);
    }
    

    onDelete(id: number) {
      this.osService.deleteById(id)
      .subscribe(() => {
        console.log("Os deletado!!!");
        //Remove carro da lista
        this.oss = this.oss.filter( os => os.id !== id);
      });
    }

}
