import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { OsRouting } from './os.routing';
import { OsService } from './os.service';
import { OsListaComponent } from './os-lista/os-lista.component';
import { OsFormularioComponent } from './os-formulario/os-formulario.component';
import { CoreModule } from '../core/core.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';



@NgModule({
    declarations: [
        OsListaComponent,
        OsFormularioComponent,
    ],
    imports: [
        // Angular
        HttpModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        NgSelectModule,
        RxReactiveFormsModule,  
        
        

        // Componente
        OsRouting
    ],
    providers: [
        // Serviços
        OsService
    ]
})

export class OsModule { }
