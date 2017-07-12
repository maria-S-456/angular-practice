import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { MariaComponent } from './maria.component';
import { ProductListComponent } from './products/product-list.component';
import { OrdersListComponent } from './orders/orders-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { OrdersFilterPipe } from './orders/orders-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductsDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {path:'products',component:ProductListComponent},
    {path:'product/:id',component:ProductsDetailComponent},
    {path:'welcome',component:WelcomeComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',redirectTo:'welcome',pathMatch:'full'}])
  ],
  declarations: [
    AppComponent,
    MariaComponent,
    ProductListComponent,
    OrdersListComponent,
    ProductFilterPipe,
    OrdersFilterPipe,
    StarComponent,
    ProductsDetailComponent,
    WelcomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }