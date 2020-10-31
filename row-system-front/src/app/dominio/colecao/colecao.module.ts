import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ColecaoRouting } from './colecao.routing';
import { ColecaoService } from './colecao.service';
import { ColecaoListaComponent } from './colecao-lista/colecao-lista.component';
import { ColecaoFormularioComponent } from './colecao-formulario/colecao-formulario.component';
import { NgFieldModule } from 'ng-field';


@NgModule({
    declarations: [
        ColecaoListaComponent,
        ColecaoFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NgFieldModule,


        // Componente
        ColecaoRouting
    ],
    providers: [
        // Serviços
        ColecaoService
    ]
})

export class ColecaoModule { }
