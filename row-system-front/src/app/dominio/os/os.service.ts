import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Os } from './os';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class OsService {

  url = `${environment.urlApi}/os`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Os[]>{
    return this.http.get<Os[]>(`${this.url}`);
  }

  findById(id: number): Observable<Os>{
    return this.http.get<Os>(`${this.url}/${id}`);
  }

  save(os: Os): Observable<Os>{
    if(os.id){
      return this.http.put<Os>(`${this.url}`, JSON.stringify(os), httpOptions);
    } else {
      return this.http.post<Os>(`${this.url}`, JSON.stringify(os),httpOptions);
    }
  }

  deleteById(id: number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
