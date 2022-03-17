import { Clients } from './../../../../core/clients.model';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../clients.service';

@Component({
  selector: 'app-table-clients',
  templateUrl: './table-clients.component.html',
  styleUrls: ['./table-clients.component.css']
})
export class TableClientsComponent implements OnInit {

  clientsInfo: Clients[] = [
    {
      id: 1,
      nome: "João Silva",
      telefone: "(85) 9 89545050",
      endereco: {
        logradouro: "Rua do Abacaxi",
        numero: "10",
        bairro: "Brasil",
        complemento: null,
        cep: "38.400-12",
        cidade: "Uberlândia",
        estado: "MG"
      },
      ativo: true
    },
    {
      id: 2,
      nome: "Silva",
      telefone: "(85) 9 89545050",
      endereco: {
        logradouro: "Rua do Abacaxi",
        numero: "10",
        bairro: "Brasil",
        complemento: null,
        cep: "38.400-12",
        cidade: "Uberlândia",
        estado: "MG"
      },
      ativo: false
    },
    {
      id: 3,
      nome: "João",
      telefone: "(85) 9 89545050",
      endereco: {
        logradouro: "Rua do Abacaxi",
        numero: "10",
        bairro: "Brasil",
        complemento: null,
        cep: "38.400-12",
        cidade: "Uberlândia",
        estado: "MG"
      },
      ativo: true
    }
  ];

  clientsTeste: Clients [] = []; 

  displayedColumns = ['nome', 'telefone', 'data', 'ativo']

  constructor(private clientHttp: ClientsService) { }

  ngOnInit(): void {
    this.clientHttp.getListClients().subscribe(
      res => {
        this.clientsTeste = res;
      }
    )
  }

}
