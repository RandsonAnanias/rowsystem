import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { InformacaoListaComponent } from './informacao-lista/informacao-lista.component';
import { InformacaoFormularioComponent } from './informacao-formulario/informacao-formulario.component';

const informacaoRoutes: Routes = [
    { path: '', component: InformacaoListaComponent},
    { path: 'visualizar/:id', component: InformacaoFormularioComponent},
    { path: 'incluir/:id', component: InformacaoFormularioComponent},
    { path: 'alterar/:id', component: InformacaoFormularioComponent},
    { path: 'devolucao/:id', component: InformacaoFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(informacaoRoutes)],
    exports: [RouterModule]
  })

  export class InformacaoRouting {}
