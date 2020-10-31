import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PessoaRouting } from './pessoa.routing';
import { PessoaService } from './pessoa.service';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';


@NgModule({
    declarations: [
        PessoaListaComponent,
        PessoaFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        PessoaRouting
    ],
    providers: [
        // Serviços
        PessoaService
    ]
})

export class PessoaModule { }
