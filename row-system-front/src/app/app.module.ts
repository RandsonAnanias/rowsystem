import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { AppRouting } from './app.routing';
import { AuthService } from './dominio/usuario/usuario-login/auth.service';
import { NgFieldModule } from 'ng-field';



@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AlertModule.forRoot(),
    NgFieldModule,



    // app
    AppRouting
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
