import {Component} from '@angular/core';
import { ProductService } from './products/product.service';
import { OrdersService } from './orders/orders.service';

@Component({
	selector: 'pm-app',
	template:`		
		<div> 
			<nav class='navbar navbar-default'>
				<div class='container-fluid'>
					<a class='navbar-brand'>
						{{pageTitle}}
					</a>
					<ul class='nav navbar-nav'>
						<li>
							<a [routerLink]="['/welcome']">Home</a>
						</li>
						<li>
							<a [routerLink]="['/products']">Product</a>
						</li>
						<li>
							<a [routerLink]="['/orders']">Orders</a>
						</li>
					</ul>
				</div>
			</nav>
			<div class='container'>
				<router-outlet></router-outlet>
				
			</div>
		</div>

		
	`,
	providers: [ProductService, OrdersService]
})

export class AppComponent{
	pageTitle: string = 'This is product management'
}