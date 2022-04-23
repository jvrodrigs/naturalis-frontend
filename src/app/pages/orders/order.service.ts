import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Orders, RequestOrders } from 'src/app/core/orders.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  URL_API = "http://localhost:8080/orders"

  constructor(private http: HttpClient,
    private datePipe: DatePipe,
    private snackBar: MatSnackBar) { }

  getListOrders(): Observable<RequestOrders> {
    return this.http.get<RequestOrders>(`${this.URL_API}/filter`).pipe(
      map((data: RequestOrders) => data,
      this.showMessage('Informações recebidas com sucesso!')),
      catchError(e =>
        this.errorHandler("Erro ao tentar conectar com o servidor!"))
    );
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
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
