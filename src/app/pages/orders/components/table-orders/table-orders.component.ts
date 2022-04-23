import { Component, OnInit } from '@angular/core';
import { Orders, RequestOrders } from 'src/app/core/orders.model';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  styleUrls: ['./table-orders.component.css']
})
export class TableOrdersComponent implements OnInit {

  ordersList: Orders[] =[];
  request!: RequestOrders;

  displayedColumns = ['ref','data', 'cliente', 'produto', 'telefone', 'responsavel', 'status', 'preco'];

  totalPaging = 0;
  actualPaging = 0;


  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.requestHttp()
  }

  requestHttp(page?: number){
    this.service.getListOrders().subscribe(
      res => {
        this.request = res;
        this.ordersList = this.request.content;
        this.actualPaging = this.request.currentPage;
        this.totalPaging = this.request.totalPages;
        console.log(this.request);
      },
    )
  }

  counter(i:number){
    return new Array(i);
  }

  onClickPagination(i: number){
    this.actualPaging = i;
    this.requestHttp(i);
  }

  onClickNext(){
    this.onClickPagination(this.actualPaging+1);
  }

  onClickPrevious(){
    this.onClickPagination(this.actualPaging-1);
  }

}
