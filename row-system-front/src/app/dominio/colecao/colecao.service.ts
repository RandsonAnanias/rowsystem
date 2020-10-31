import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Colecao } from './colecao';

@Injectable()
export class ColecaoService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Colecao[]> {
        return this.http
            .get<Colecao[]>(`${this.URL}/colecao`);
    }

    buscarPeloId(id: number): Observable<Colecao> {
        return this.http
            .get<Colecao>(`${this.URL}/colecao/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(colecao: Colecao): Observable<Colecao> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (colecao.id) {
            return this.http
                .put<Colecao>(
                    `${this.URL}/colecao`,
                    JSON.stringify(colecao),
                    httpOptions
                );
        } else {
            return this.http
                .post<Colecao>(`${this.URL}/colecao`, JSON.stringify(colecao), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/colecao/${id}`);
    }

}
