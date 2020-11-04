import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Colecao } from './colecao';
import { environment } from 'src/environments/environment';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root'
})

export class ColecaoService {

    url = `${environment.urlApi}/colecao`;

    constructor(private http: HttpClient) { }

    findAll(): Observable<Colecao[]> {
        return this.http.get<Colecao[]>(`${this.url}`);
    }
    findById(id: number): Observable<Colecao> {
        return this.http.get<Colecao>(`${this.url}/${id}`);
    }
    save(colecao: Colecao): Observable<Colecao> {
        if (colecao.id) {
            return this.http.put<Colecao>(`${this.url}`, JSON.stringify(colecao), httpOptions);
        } else {
            return this.http.post<Colecao>(`${this.url}`, JSON.stringify(colecao), httpOptions);
        }
    }
    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

}
