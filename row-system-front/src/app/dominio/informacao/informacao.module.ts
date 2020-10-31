import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { InformacaoRouting } from './informacao.routing';
import { InformacaoService } from './informacao.service';
import { InformacaoListaComponent } from './informacao-lista/informacao-lista.component';
import { InformacaoFormularioComponent } from './informacao-formulario/informacao-formulario.component';


@NgModule({
    declarations: [
        InformacaoListaComponent,
        InformacaoFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        InformacaoRouting
    ],
    providers: [
        // Serviços
        InformacaoService
    ]
})

export class InformacaoModule { }
