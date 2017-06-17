import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { MariaComponent } from './maria.component';
import { ProductListComponent } from './products/product-list.component';
import { OrdersListComponent } from './orders/orders-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MariaComponent,
    ProductListComponent,
    OrdersListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }