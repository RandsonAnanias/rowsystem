import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ContatopsRouting } from './contatops.routing';
import { ContatopsService } from './contatops.service';
import { ContatopsListaComponent } from './contatops-lista/contatops-lista.component';
import { ContatopsFormularioComponent } from './contatops-formulario/contatops-formulario.component';


@NgModule({
    declarations: [
        ContatopsListaComponent,
        ContatopsFormularioComponent
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,

        // Componente
        ContatopsRouting
    ],
    providers: [
        // Serviços
        ContatopsService
    ]
})

export class ContatopsModule { }
