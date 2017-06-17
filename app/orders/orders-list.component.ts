import { Component } from '@angular/core';

@Component({
	selector: 'pm-orders',
	templateUrl: 'app/orders/orders-list.component.html'
})

export class OrdersListComponent{
	pageTitle: string = 'Orders list';
	orders: any[] = [
        {
        "orderId": 1,
        "itemName": "Greenwald's Fertilizer",
        "model":"42M88",
        "numberOrdered":3,
        "customerName": "John Harris",
        "date": "12/14/16",
        "totalPrice": 59.85
    },
    {
        "orderId": 2,
        "itemName": "Walk-Behind Lawn Mower",
        "model":"71S30",
        "numberOrdered":1,
        "customerName": "Bridget Corey",
        "date": "12/28/16",
        "totalPrice": 89.99
    },
    {
        "orderId": 3,
        "itemName": "Plastic Planter",
        "model":"17R03",
        "numberOrdered":5,
        "customerName": "Ethan S. Cooper",
        "date": "01/02/17",
        "totalPrice": 59.90
    },
    {
        "orderId": 4,
        "itemName": "Cedar Planks",
        "model":"99V72",
        "numberOrdered":7,
        "customerName": "Victor B. Lee",
        "date": "01/06/17",
        "totalPrice": 71.33
    },
    {
        "orderId": 5,
        "itemName": "Paint",
        "model":"41D91",
        "numberOrdered":1,
        "customerName": "Bill Groban",
        "date": "01/22/17",
        "totalPrice": 41.95
    }
    ]
}