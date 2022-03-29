import { Component, OnInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service: OrderService) { }

  ngOnInit(): void {
    this.service.getListOrders().subscribe(
      res => {
        console.log(res)      
      },
    )
  }

}