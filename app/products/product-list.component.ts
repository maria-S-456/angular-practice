import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
	selector: 'pm-products',
    moduleId: module.id,
	templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product list';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    showImage: boolean = false;
	products: IProduct[];
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
    constructor(private _productService : ProductService){
    
    }
    ngOnInit(): void{
        this.products = this._productService.getProducts();
    }
    onRatingClicked(message:string): void{
        this.pageTitle = 'Product List:' + message;
    }
}