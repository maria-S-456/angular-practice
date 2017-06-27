import { Component } from '@angular/core';

@Component({
	selector: 'maria-star',
	templateUrl: 'app/shared/star.component.html',
	styleUrls: ['app/shared/star.component.css']
})

export class StarComponent{
	rating: number = 4;
	starWidth: number
}