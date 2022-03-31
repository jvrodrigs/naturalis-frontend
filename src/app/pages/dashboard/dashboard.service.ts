import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Orders } from 'src/app/core/orders.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  URL_API = "http://localhost:8080/orders"

  constructor(private http: HttpClient,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar) { }

  //TODO: Remember to create a new order request model.
  getListOrders(dataCriacaoDe?: Date, dataCriacaoAte?: Date): Observable<Orders[]> {
    let filter;
    if (dataCriacaoDe && dataCriacaoAte){
       filter = `dataCriacaoDe=${this.datePipe.transform(dataCriacaoDe, 'dd-MM-yyyy')}&dataCriacaoAte=${this.datePipe.transform(dataCriacaoAte, 'dd-MM-yyyy')}`;
    } else {
      filter = `dataCriacaoDe=${this.datePipe.transform(dataCriacaoDe, 'dd-MM-yyyy')}&dataCriacaoAte=${this.datePipe.transform(dataCriacaoDe, 'dd-MM-yyyy')}`
    }
    return this.http.get<Orders[]>(`${this.URL_API}?${filter}`).pipe(
      map((data: any) => data.content,
      this.showMessage('Informações recebidas com sucesso!')),
      catchError(e =>
        this.errorHandler("Erro ao tentar conectar com o servidor!"))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 1000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  errorHandler(msg: string): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY
  }

}
