import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Clients } from 'src/app/core/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  URL_API = "http://localhost:8080/client"
  constructor(private http: HttpClient) { }

  getListClients(): Observable<Clients[]>{
    return this.http.get<Clients[]>(this.URL_API).pipe(
      map( (data: any) => data)
    )
  }
  
}
