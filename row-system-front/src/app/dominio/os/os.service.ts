import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, last, map, tap } from 'rxjs/operators';


import { Os } from './os';

@Injectable()
export class OsService {

  private URL: string = "http://localhost:8888";

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Os[]> {
    return this.http
      .get<Os[]>(`${this.URL}/os`);
  }

  buscarPeloId(id: number): Observable<Os> {
    return this.http
      .get<Os>(`${this.URL}/os/${id}`)
      .pipe(
        map(response => response)
      );
  }

  buscarTodosColecao(id: number): Observable<Os[]> {

    return this.http.get<Os[]>(`${this.URL}/os/colecao/${id}`).pipe(
      map(response => response)
    );
  }

  salvar(os: Os): Observable<Os> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    if (os.id) {
      return this.http
        .put<Os>(
          `${this.URL}/os`,
          JSON.stringify(os),
          httpOptions
        );
    } else {
      return this.http
        .post<Os>(`${this.URL}/os`, JSON.stringify(os), httpOptions);
    }
  }

  excluir(id: number): Observable<any> {
    return this.http
      .delete(`${this.URL}/os/${id}`);
  }

}
