import { Component } from '@angular/core';
import { IOrders } from './orders';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: 'app/orders/orders-detail.component.html'
})

export class OrdersDetailComponent{
	pageTitle: string = 'Orders Detail';
	orders: IOrders;
}