import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Pessoa } from './pessoa';

@Injectable()
export class PessoaService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Pessoa[]> {
        return this.http
            .get<Pessoa[]>(`${this.URL}/pessoa`);
    }

    buscarPeloId(id: number): Observable<Pessoa> {
        return this.http
            .get<Pessoa>(`${this.URL}/pessoa/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(pessoa: Pessoa): Observable<Pessoa> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (pessoa.id) {
            return this.http
                .put<Pessoa>(
                    `${this.URL}/pessoa`,
                    JSON.stringify(pessoa),
                    httpOptions
                );
        } else {
            return this.http
                .post<Pessoa>(`${this.URL}/pessoa`, JSON.stringify(pessoa), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/pessoa/${id}`);
    }

}
