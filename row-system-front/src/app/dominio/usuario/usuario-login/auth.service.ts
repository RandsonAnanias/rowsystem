import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  login(usuario: Usuario){
      if(usuario.usuario === 'viviane.batista@unievangelica.edu.br' && usuario.senha === '123456'){

        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.router.navigate(['/colecao']);

      }else{
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);

      }
  }
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
