import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ColecaoRouting } from './colecao.routing';
import { ColecaoService } from './colecao.service';
import { ColecaoListaComponent } from './colecao-lista/colecao-lista.component';
import { ColecaoFormularioComponent } from './colecao-formulario/colecao-formulario.component';
import { CoreModule } from '../core/core.module';


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
        CoreModule,


        // Componente
        ColecaoRouting
    ],
    providers: [
        // Serviços
        ColecaoService
    ]
})

export class ColecaoModule { }
