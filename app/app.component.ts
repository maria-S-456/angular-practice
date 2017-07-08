import {Component} from '@angular/core';
import { ProductService } from './products/product.service';
import { OrdersService } from './orders/orders.service';

@Component({
	selector: 'pm-app',
	template:`		
		<div> 
			<h1>{{pageTitle}}</h1>
		</div>
		<pm-products></pm-products>
		<pm-orders></pm-orders>
	`,
	providers: [ProductService, OrdersService]
})

export class AppComponent{
	pageTitle: string = 'This is product management'
}