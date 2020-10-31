import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { UsuarioRouting } from './usuario.routing';
import { UsuarioService } from './usuario.service';
import { UsuarioListaComponent } from './usuario-lista/usuario-lista.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioLoginComponent } from './usuario-login/usuario-login.component';



@NgModule({
    declarations: [
        UsuarioListaComponent,
        UsuarioFormularioComponent,
        UsuarioLoginComponent,

    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        UsuarioRouting
    ],
    providers: [
        // Serviços
        UsuarioService
    ]
})

export class UsuarioModule { }
