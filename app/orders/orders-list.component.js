"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OrdersListComponent = (function () {
    function OrdersListComponent() {
        this.pageTitle = 'Orders list';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.orders = [
            {
                "orderId": 1,
                "itemName": "Greenwald's Fertilizer",
                "model": "42M88",
                "numberOrdered": 3,
                "customerName": "John Harris",
                "date": "12/14/16",
                "totalPrice": 59.85,
                "imageUrl": "http://4.bp.blogspot.com/-oK-MhzwiXns/TtXr0uYQXMI/AAAAAAAAB0U/VvZsuVOH9WM/s1600/Fertilizer.gif"
            },
            {
                "orderId": 2,
                "itemName": "Walk-Behind Lawn Mower",
                "model": "71S30",
                "numberOrdered": 1,
                "customerName": "Bridget Corey",
                "date": "12/28/16",
                "totalPrice": 89.99,
                "imageUrl": "http://images.clipartpanda.com/lawn-mower-clip-art-as1031.gif"
            },
            {
                "orderId": 3,
                "itemName": "Plastic Planter",
                "model": "17R03",
                "numberOrdered": 5,
                "customerName": "Ethan S. Cooper",
                "date": "01/02/17",
                "totalPrice": 59.90,
                "imageUrl": "http://www.homedepot.com/catalog/productImages/1000/93/931c4e27-581e-4550-87ac-8ef3f4c80e70_1000.jpg"
            },
            {
                "orderId": 4,
                "itemName": "Cedar Planks",
                "model": "99V72",
                "numberOrdered": 7,
                "customerName": "Victor B. Lee",
                "date": "01/06/17",
                "totalPrice": 71.33,
                "imageUrl": "https://previews.123rf.com/images/madozi/madozi1408/madozi140800011/30463951-wood-planks-isolated-illustration-on-white-background-Stock-Vector.jpg"
            },
            {
                "orderId": 5,
                "itemName": "Paint",
                "model": "41D91",
                "numberOrdered": 1,
                "customerName": "Bill Groban",
                "date": "01/22/17",
                "totalPrice": 41.95,
                "imageUrl": "https://cbpofarizonainc.com/wp-content/uploads/Red-paint-can.jpg"
            }
        ];
    }
    OrdersListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    return OrdersListComponent;
}());
OrdersListComponent = __decorate([
    core_1.Component({
        selector: 'pm-orders',
        templateUrl: 'app/orders/orders-list.component.html'
    })
], OrdersListComponent);
exports.OrdersListComponent = OrdersListComponent;
//# sourceMappingURL=orders-list.component.js.map