import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { UsuarioService } from '../../usuario/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuario: Usuario[];


  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {

    this.usuarioService.buscarTodos()
      .subscribe(resposta => {
        this.usuario = resposta
      });

  }

  excluir(usuarioId: number) {
    this.usuarioService.excluir(usuarioId)
      .subscribe(resposta => {
        console.log("Usuario excluído com sucesso");
        // retorna para a lista
        this.usuarioService.buscarTodos()
          .subscribe(resposta => {
            this.usuario = resposta
          });
        // this.router.navigate(['/usuario']);
      });
  }

}
