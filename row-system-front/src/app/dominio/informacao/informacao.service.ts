import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Informacao } from './informacao';

@Injectable()
export class InformacaoService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Informacao[]> {
        return this.http
            .get<Informacao[]>(`${this.URL}/informacao`);
    }

    buscarPeloId(id: number): Observable<Informacao> {
        return this.http
            .get<Informacao>(`${this.URL}/informacao/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(informacao: Informacao): Observable<Informacao> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (informacao.id) {
            return this.http
                .put<Informacao>(
                    `${this.URL}/informacao`,
                    JSON.stringify(informacao),
                    httpOptions
                );
        } else {
            return this.http
                .post<Informacao>(`${this.URL}/informacao`, JSON.stringify(informacao), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/informacao/${id}`);
    }

}
