import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColecaoListaComponent } from './colecao-lista/colecao-lista.component';
import { ColecaoFormularioComponent } from './colecao-formulario/colecao-formulario.component';

const colecaoRoutes: Routes = [
    { path: '', component: ColecaoListaComponent },
    { path: 'novo', component: ColecaoFormularioComponent },
    { path: 'editar/:id', component: ColecaoFormularioComponent },
    { path: 'visualizar/:id', component: ColecaoFormularioComponent },
];


@NgModule({
    imports: [RouterModule.forChild(colecaoRoutes)],
    exports: [RouterModule]
})

export class ColecaoRouting { }
