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
    errorMessage: string;
    orders: IOrders[];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    constructor(private _ordersService : OrdersService){
    
    }
    ngOnInit(): void{
        this._ordersService.getOrders().subscribe(orders=> this.orders=orders, error=> this.errorMessage = <any>error)
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Orders List:' + message;
    }
}