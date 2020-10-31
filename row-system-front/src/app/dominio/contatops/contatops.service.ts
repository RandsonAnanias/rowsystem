import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Contatops } from './contatops';

@Injectable()
export class ContatopsService {

    private URL:string = "http://localhost:8888";

    constructor(private http: HttpClient) { }

    buscarTodos(): Observable<Contatops[]> {
        return this.http
            .get<Contatops[]>(`${this.URL}/contatops`);
    }

    buscarPeloId(id: number): Observable<Contatops> {
        return this.http
            .get<Contatops>(`${this.URL}/contatops/${id}`)
            .pipe(
                map(response => response)
            );
    }

    salvar(contatops: Contatops): Observable<Contatops> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };

        if (contatops.id) {
            return this.http
                .put<Contatops>(
                    `${this.URL}/contatops`,
                    JSON.stringify(contatops),
                    httpOptions
                );
        } else {
            return this.http
                .post<Contatops>(`${this.URL}/contatops`, JSON.stringify(contatops), httpOptions);
        }
    }

    excluir(id: number): Observable<any> {
        return this.http
            .delete(`${this.URL}/contatops/${id}`);
    }

}
