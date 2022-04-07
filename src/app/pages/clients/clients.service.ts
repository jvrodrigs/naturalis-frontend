import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Clients, RequestClients } from 'src/app/core/clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  URL_API = "http://localhost:8080/client"

  constructor(private http: HttpClient,
    private snackBar:MatSnackBar) { }

  getListClients(page?: number): Observable<RequestClients>{
    let url = `${this.URL_API}?${page ? `page=${page}` : ''}`
    return this.http.get<RequestClients>(url).pipe(
      map((data: RequestClients) => data,
      this.showMessage('Informações recebidas com sucesso!')),
      catchError(e =>
        this.errorHandler("Erro ao tentar conectar com o servidor!"))
    )
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
