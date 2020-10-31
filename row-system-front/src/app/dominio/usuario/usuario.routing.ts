import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';

const usuarioRoutes: Routes = [
    { path: '', component: UsuarioListaComponent},
    { path: 'visualizar/:id', component: UsuarioFormularioComponent},
    { path: 'incluir', component: UsuarioFormularioComponent},
    { path: 'alterar/:id', component: UsuarioFormularioComponent},
    { path: 'login', component: UsuarioLoginComponent},
];


@NgModule({
    imports: [RouterModule.forChild(usuarioRoutes)],
    exports: [RouterModule]
  })

  export class UsuarioRouting {}
