import { ClientsRoutingModule } from './clients-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsReadComponent } from './components/clients-read/clients-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from '@angular/common/http';
import { TableClientsComponent } from './components/table-clients/table-clients.component';


@NgModule({
  declarations: [
    ClientsComponent,
    ClientsReadComponent,
    TableClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class ClientsModule { }
