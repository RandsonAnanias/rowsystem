import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-usuario-login',
  templateUrl: './usuario-login.component.html',
  styleUrls: ['./usuario-login.component.css']
})
export class UsuarioLoginComponent implements OnInit {

  // usuario: Usuario;
  private usuario: Usuario = new Usuario();
  newusuario: Usuario;
  usuarioForm: FormGroup;
  titulo: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.newusuario = new Usuario();

    /* Reactive Forms */
    this.usuarioForm = this.builder.group({
      usuario: this.builder.control('', [Validators.required, Validators.maxLength(50)]),
      senha: this.builder.control('', [Validators.required]),
    }, {});

  }

  login(usuario: Usuario) {
    // console.log(this.usuario);
    this.authService.login(this.usuario);
    // if (this.usuarioForm.invalid) {
    //   console.log("Erro no formulário");
    // }
    // else {
    //   this.usuarioService.buscarPeloUSR(usuario.usuario)
    //     .subscribe(retorno => {
    //       this.usuario = retorno;
    //     });
    //   if (this.usuario.usuario == usuario.usuario && this.usuario.senha == usuario.senha) {
    //     // retorna para a lista
        // this.router.navigate(['/colecao']);
    //   }
    // }
  }

  select(event: any) {
    // this.usuario.tipopessoa = event.target.value;
    // console.log(this.usuario)
  }

}
