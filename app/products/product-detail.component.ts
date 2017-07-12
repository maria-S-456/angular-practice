import { Component } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: 'app/products/product-detail.component.html'
})

export class ProductsDetailComponent{
	pageTitle: string = 'Product Detail';
	product: IProduct;
}