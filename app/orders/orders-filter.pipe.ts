import { Pipe, PipeTransform } from '@angular/core';
import { IOrders } from './orders';

@Pipe({
	name: 'ordersFilter'
})

export class OrdersFilterPipe implements PipeTransform{
	transform(value: IOrders[], filterBy: string): IOrders[]{
		filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
		return filterBy ? value.filter(
		(orders:IOrders) => orders.itemName.toLocaleLowerCase().indexOf(filterBy)!== -1) : value;
	}
}