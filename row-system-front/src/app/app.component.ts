import { Component, OnInit } from '@angular/core';
import { Usuario } from './dominio/usuario/usuario';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './dominio/usuario/usuario-login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'RowSystem';
  usuario: Usuario;
  loginflag: boolean;
  mostrarMenu: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ){}

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostar => this.mostrarMenu = mostar
    );

  }

}
