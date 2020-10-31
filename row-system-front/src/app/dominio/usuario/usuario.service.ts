import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';

// import {MatTabsModule} from '@angular/material/tabs';

import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Usuario[]> {
        return this.http
            .get<Usuario[]>(`${this.URL}/usuario`);
    }

    buscarPeloId(id: number): Observable<Usuario> {
        return this.http
            .get<Usuario>(`${this.URL}/usuario/${id}`)
            .pipe(
                map(response => response)
            );
    }

    buscarPeloUSR(usuario: string): Observable<Usuario> {
      return this.http
        .get<Usuario>(`${this.URL}/os/${usuario}`)
        .pipe(
          map(response => response)
        );
    }

    salvar(usuario: Usuario): Observable<Usuario> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (usuario.id) {
            return this.http
                .put<Usuario>(
                    `${this.URL}/usuario`,
                    JSON.stringify(usuario),
                    httpOptions
                );
        } else {
            return this.http
                .post<Usuario>(`${this.URL}/usuario`, JSON.stringify(usuario), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/usuario/${id}`);
    }

}
