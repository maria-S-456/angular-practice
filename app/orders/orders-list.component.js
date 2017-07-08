"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var orders_service_1 = require("./orders.service");
var OrdersListComponent = (function () {
    function OrdersListComponent(_ordersService) {
        this._ordersService = _ordersService;
        this.pageTitle = 'Orders list';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
    }
    OrdersListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    OrdersListComponent.prototype.ngOnInit = function () {
        this.orders = this._ordersService.getOrders();
    };
    OrdersListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Orders List:' + message;
    };
    return OrdersListComponent;
}());
OrdersListComponent = __decorate([
    core_1.Component({
        selector: 'pm-orders',
        moduleId: module.id,
        templateUrl: 'orders-list.component.html',
        styleUrls: ['orders-list.component.css']
    }),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersListComponent);
exports.OrdersListComponent = OrdersListComponent;
//# sourceMappingURL=orders-list.component.js.map