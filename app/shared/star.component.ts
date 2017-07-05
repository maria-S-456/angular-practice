import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'maria-star',
	templateUrl: 'app/shared/star.component.html',
	styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{

	@Input() rating: number;
	starWidth: number;
	@Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>(); 
	ngOnChanges(): void{
		this.starWidth= this.rating * 86/5;
	}
	onClick(): void{
		this.ratingClicked.emit(`ratingClicked is ${this.rating} a`)
	}
}