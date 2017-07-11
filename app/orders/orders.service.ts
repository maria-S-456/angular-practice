import { Injectable } from '@angular/core';
import { IOrders } from './orders';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()

export class OrdersService{
    private _ordersUrl = '/api/orders/orders.json';

    constructor(private _http:Http){

    }

	getOrders(): Observable<IOrders[]> {
		return this._http.get(this._ordersUrl).map((response:Response)=> <IOrders[]> response.json())
        .do(data => console.log(JSON.stringify(data)))
        .catch(this.handleError)
	}

    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error||'serverError')
    }
}