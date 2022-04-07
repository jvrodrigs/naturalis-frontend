import { Clients, RequestClients } from './../../../../core/clients.model';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  clientsTeste: Clients[] = []; 

  displayedColumns = ['nome', 'telefone', 'data', 'ativo']

  request!: RequestClients;
  totalPaging = 0;
  actualPaging = 0;

  constructor(private clientHttp: ClientsService,
    private rend: Renderer2) { }

  ngOnInit(): void {
    this.requestHttp();
  }

  requestHttp(page?: number){
    this.clientHttp.getListClients(page).subscribe(
      res => {        
        this.clientsTeste = res.content;
        this.request = res;
        this.totalPaging = res.totalPages;
        this.actualPaging = res.number;        
      }
    )
  }

  counter(i:number){
    return new Array(i);
  }

  onClickPagination(i: number){    
    this.actualPaging = i;
    this.requestHttp(i)
  }

  onClickNext(){
    this.onClickPagination(this.actualPaging+1);
  }

  onClickPrevious(){
    this.onClickPagination(this.actualPaging-1);
  }
}
