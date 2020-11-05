import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AuthGuard } from './dominio/guards/auth.guard';


const appRoutes: Routes = [
    { path: '', redirectTo: '/usuario/login', pathMatch: 'full'},
    { path: 'relatorio', loadChildren: './dominio/produto/produto.module#ProdutoModule'},
    { path: 'os', loadChildren: './dominio/os/os.module#OsModule',canActivate: [AuthGuard]},
    { path: 'pessoa', loadChildren: './dominio/pessoa/pessoa.module#PessoaModule'},
    { path: 'usuario', loadChildren: './dominio/usuario/usuario.module#UsuarioModule'},
    { path: 'colecao', loadChildren: './dominio/colecao/colecao.module#ColecaoModule', canActivate: [AuthGuard]},
    { path: 'informacao', loadChildren: './dominio/informacao/informacao.module#InformacaoModule'},
    { path: 'contatops', loadChildren: './dominio/contatops/contatops.module#ContatopsModule'},
];



@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        { enableTracing: true }
    )],
    exports: [RouterModule]
  })

  export class AppRouting {}
