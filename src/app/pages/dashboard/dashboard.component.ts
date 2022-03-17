import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Orders } from 'src/app/core/orders.model';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  dataOrders: Orders[] = [];

  ordersFull: number = 0;
  ordersFinalize: number = 0;
  ordersInRoute: number = 0;
  ordersCancel: number = 0;
  orderFullValue: number = 1500;
  OrderFullValueGoal: number = 15990;
  OrderPorcentGoal: number = 99;

  countUpCurrency = {
    prefix: 'R$'
  }

  countUpPorcent = {
     suffix: '%',
  }

  constructor(private dashService: DashboardService) { }

  ngOnInit(): void {
    this.dashService.getListOrders().subscribe(
      res => {
        this.dataOrders = res;
        this.calcInformationsOrdersDash(this.dataOrders);
      }
    )
  }

  

  calcInformationsOrdersDash(order: Orders[]){  
    this.ordersFull = order.length;

    const countConfig = order.reduce((prev, or) => {
      const config = {...prev}
      switch (or.status.nome) {
        case 'ENTREGUE':
          config.countFinalize++
          break;
        case 'EM ROTA':
          config.countInRoute++
          break;
        case 'CANCELADO':
          config.countCancel++
          break;
        default:
      }
      return config
    }, {
      countFinalize: 0,
      countInRoute: 0,
      countCancel: 0,
    })
    
    order.forEach(or => {
      console.log(parseInt(or.valorTotal));
      
    })    

    this.ordersCancel = countConfig.countCancel;
    this.ordersFinalize = countConfig.countFinalize;
    this.ordersInRoute = countConfig.countInRoute;
    //console.log(this.orderFullValue);
    
  }

  requestIsDayOrders(event: MatSlideToggleChange){
    console.log('Day', event.checked);
    this.checked = event.checked;
  }
}
