import { DatePipe } from '@angular/common';
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

  constructor(private http: HttpClient,
    private datePipe: DatePipe) { }

  getListOrders(dataCriacaoDe: Date, dataCriacaoAte: Date): Observable<Orders[]> {
    const filter = `dataCriacaoDe=${this.datePipe.transform(dataCriacaoDe, 'dd-MM-yyyy')}&dataCriacaoAte=${this.datePipe.transform(dataCriacaoAte, 'dd-MM-yyyy')}`;

    return this.http.get<Orders[]>(`${this.URL_API}?${filter}`).pipe(
      map((data: Orders[]) => data)
    );
  }
}
