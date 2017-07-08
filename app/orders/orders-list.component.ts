import { Component, OnInit } from '@angular/core';
import { IOrders } from './orders';
import { OrdersService } from './orders.service';

@Component({
	selector: 'pm-orders',
    moduleId: module.id,
	templateUrl: 'orders-list.component.html',
    styleUrls: ['orders-list.component.css']
})

export class OrdersListComponent implements OnInit{
    pageTitle: string = 'Orders list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    showImage: boolean = false;
    orders: IOrders[];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    constructor(private _ordersService : OrdersService){
    
    }
    ngOnInit(): void{
        this.orders = this._ordersService.getOrders();
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Orders List:' + message;
    }
}