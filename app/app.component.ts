import {Component} from '@angular/core';

@Component({
	selector: 'pm-app',
	template:`		
		<div> 
			<h1>{{pageTitle}}</h1>
		</div>
		<pm-products></pm-products>
		<pm-orders></pm-orders>
	`
})

export class AppComponent{
	pageTitle: string = 'This is product management'
}