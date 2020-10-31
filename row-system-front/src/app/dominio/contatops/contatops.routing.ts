import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ContatopsListaComponent } from './contatops-lista/contatops-lista.component';
import { ContatopsFormularioComponent } from './contatops-formulario/contatops-formulario.component';

const contatopsRoutes: Routes = [
    { path: '', component: ContatopsListaComponent},
    { path: 'visualizar/:id', component: ContatopsFormularioComponent},
    { path: 'incluir', component: ContatopsFormularioComponent},
    { path: 'alterar/:id', component: ContatopsFormularioComponent},
];


@NgModule({
    imports: [RouterModule.forChild(contatopsRoutes)],
    exports: [RouterModule]
  })

  export class ContatopsRouting {}
