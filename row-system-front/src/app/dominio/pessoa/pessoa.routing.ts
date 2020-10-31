import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';

const pessoaRoutes: Routes = [
    { path: '', component: PessoaListaComponent},
    { path: 'visualizar/:id', component: PessoaFormularioComponent},
    { path: 'incluir', component: PessoaFormularioComponent},
    { path: 'alterar/:id', component: PessoaFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(pessoaRoutes)],
    exports: [RouterModule]
  })

  export class PessoaRouting {}
