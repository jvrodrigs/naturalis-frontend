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
  orderFullValue: number = 0;
  OrderFullValueGoal: number = 0;
  OrderPorcentGoal: number = 0;

  textFilterInfoPage: string = 'Mês';
  textFilterInfoPagePlus: string = 'Mensal';

  dateFilter: Date = new Date();

  countUpCurrency = {
    prefix: 'R$',
    decimalPlaces: 2
  }

  countUpPorcent = {
    suffix: '%',
  }

  constructor(private dashService: DashboardService) { }

  ngOnInit(): void {
    const {startDay, endDay} = this.createFilterMonth(this.dateFilter);

    this.dashService.getListOrders(startDay, endDay).subscribe(
      res => {
        this.dataOrders = res;        
        this.calcInformationsOrdersDash(this.dataOrders);
      }
    )
  }

  
  createFilterMonth(date: Date){
    const startDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const endDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    return {startDay, endDay};
  }
  
  createFilterDay(date: Date){
    const day = new Date(date.getFullYear(), date.getMonth(), 1);
    
    return day;
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
      this.orderFullValue += Number(or.valorTotal);
    })    

    this.ordersCancel = countConfig.countCancel;
    this.ordersFinalize = countConfig.countFinalize;
    this.ordersInRoute = countConfig.countInRoute;    
  }

  requestIsDayOrders(event: MatSlideToggleChange){
    console.log('Mudando o filter da dashboard!');
    const day = this.createFilterDay(this.dateFilter);
    console.log(day);
    if(event.checked){
      this.textFilterInfoPage = 'Dia';
      this.textFilterInfoPagePlus = 'Diário';
    } else {
      this.textFilterInfoPage = 'Mês';
      this.textFilterInfoPagePlus = 'Mensal';
    }
  }

}
