import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Orders } from 'src/app/core/orders.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  URL_API = "http://localhost:8080/orders"

  constructor(private http: HttpClient) { }

  getListOrders(dataCriacaoDe?: Date): Observable<Orders[]> {
    console.log(dataCriacaoDe);
    return this.http.get<Orders[]>(this.URL_API).pipe(
      map((data: Orders[]) => data)
    )
  }
}
