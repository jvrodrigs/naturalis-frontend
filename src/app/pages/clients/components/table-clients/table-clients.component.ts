import { Clients } from './../../../../core/clients.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  clientsTeste: Clients[] = []; 

  displayedColumns = ['nome', 'telefone', 'data', 'ativo']

  constructor(private clientHttp: ClientsService) { }

  ngOnInit(): void {
    this.clientHttp.getListClients().subscribe(
      res => {
        console.log(res);
        
        this.clientsTeste = res.content;        
      }
    )
  }

}
